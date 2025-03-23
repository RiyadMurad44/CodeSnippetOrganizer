<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return errorMessageResponse(false, "Access Error", "Unauthorized Access", 401);            
        }

        $user = Auth::user();
        $user->token=$token;
        return messageResponse(true, "Login Successful", 200, $user);

    }

    function signup(Request $request){
        try{
            $request->validate([
                'name' => 'required|string|max:30',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);
    
            $user = new User; 
            $user->name = $request["name"];
            $user->email = $request["email"];
            $user->password = bcrypt($request["password"]);
            $user->save();
            $user->token = Auth::login($user);
            return messageResponse(true, "User created successfully", 200, $user);
        } catch (Throwable $e) {
            return errorMessageResponse(true, "False credentials", $e->getMessage(), 401);
        }
    }

    public function logout()
    {
        Auth::logout();
        return messageResponse(true, "Successfully logged out", 200);
    }

    public function all(Request $request)
    {
        return response()->json([
            "all" => User::all()
        ]);
    }

    public function refresh()
    {
        $token = Auth::refresh();
        $user = Auth::user();
        $user->token = $token;
        $user->type = "bearer";
        messageResponse(true, "refreshed", 200, $user);
    }
}
