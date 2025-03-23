<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function editProfile(Request $request){
        try {
            $user = User::find($request["id"]);

            if (!$user) {
                errorMessageResponse(false, "Error Editing", "User Not Found", 401); //check status code
            }

            $user->name = $request["name"] ?? $user->name;
            $user->password = $request["password"] ?? $user->password;
            $user->save();

            return messageResponse(true, "User Profile Updated Successfully", 200);
        } catch (\Throwable $e) {
            return errorMessageResponse(false, "Profile Edit Error", $e->getMessage(), 401); //check status code
        }
    }

    public function deleteProfile(Request $request)
    {
        try {
            $user = Auth::user();
    
            if (!$user || !($user instanceof User)) {
                return errorMessageResponse(false, "User not authenticated or invalid user object", null, 401); //check status code
            }
    
            $user->delete();
    
            return messageResponse(true, "User deleted successfully", 200);
        } catch (\Throwable $e) {
            return errorMessageResponse(false, "Failed to delete user", $e->getMessage(), 500);
        }
    }
}
