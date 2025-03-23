<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SnippetController;

Route::group(['prefix' => 'v1'], function(){
    //Authorized Users
    Route::group(["middleware" => "auth:api"], function () {
        Route::group(["prefix" => "users"], function () {
            Route::group(["prefix" => "snippets"], function () {
                //Snippet codes
                Route::get("/allSnippets/{id?}", [SnippetController::class, "all"]);
                Route::post("/addSnippet", [SnippetController::class, "addSnippet"]);
                Route::post("/editSnippet", [SnippetController::class, "editSnippet"]);
                Route::delete("/deleteSnippet/{id}", [SnippetController::class, "deleteSnippet"]);
            });

            //User Profiles
            Route::post("/logout", [AuthController::class, "logout"]);
            Route::post("/editProfile/{id}", [UserController::class, "editProfile"]);
            Route::delete("/deleteProfile", [UserController::class, "deleteProfile"]);
        });

    });

    //Unauthorized Users
    Route::post('/login', [AuthController::class, "login"])->name('login');
    Route::post('/signup', [AuthController::class, "signup"])->name('signup');

});


Route::get('/test-exception', function () {
    throw new Exception("This is a test exception for Slack notification.");
});