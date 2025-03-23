<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'v1'], function(){
    //Authorized Users
    Route::group(["middleware" => "auth:api"], function () {
        Route::group(["prefix" => "snippets"], function () {
            Route::get("/allSnippets/{id?}", [SnippetController::class, "all"]);
            Route::post("/addSnippet", [SnippetController::class, "addSnippet"]);
            Route::delete("/deleteSnippet/{id}", [SnippetController::class, "deleteSnippet"]);
            Route::post("/editSnippet", [SnippetController::class, "editSnippet"]);
        });
    });

    //Unauthorized Users
    Route::post('/login', [AuthController::class, "login"]);
    Route::post('/signup', [AuthController::class, "signup"]);

});


Route::get('/test-exception', function () {
    throw new Exception("This is a test exception for Slack notification.");
});