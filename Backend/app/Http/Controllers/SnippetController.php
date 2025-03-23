<?php

namespace App\Http\Controllers;

use App\Models\Snippet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SnippetController extends Controller
{
    public function all(Request $request)
    {
        try {
            if ($request["id"]) {
                $snippet = Snippet::find($request["id"]);
                if (!$snippet) {
                    return errorMessageResponse(false, "Not Found", "Needed Snippet Not Found", 401); //check status code
                }
                return messageResponse(true, "Snippet Found", 200, $snippet);
            } else {
                $allSnippets = Snippet::all();
                return messageResponse(true, "Returned all snippets", 200, $allSnippets);
            }
        } catch (\Exception $e) {
            return errorMessageResponse(false, "Not Found", $e->getMessage(), 401); //check status code
        }
    }

    public function addSnippet(Request $request)
    {
        try {

            $request->validate([
                'code_snippet' => 'required|string|min:3',
                'language' => 'required|string|min:1',
                'keywords' => 'required|string',
            ]);

            $snippet = new Snippet();
            $snippet->user_id = Auth::id();
            $snippet->code_snippet = $request["code_snippet"];
            $snippet->language = $request["language"];
            $snippet->keywords = $request["keywords"];
            $snippet->save();

            return messageResponse(true, "Snippet Added Successfully", 201);
        } catch (\Throwable $e) {
            return errorMessageResponse(false, "Snippet not Added", $e->getMessage(), 401); //check status code
        }
    }

    public function editSnippet(Request $request)
    {
        try {
            $snippet = Snippet::find($request["id"]);

            if (!$snippet) {
                errorMessageResponse(false, "Error Editing", "Snippet Not Found", 401); //check status code
            }

            $snippet->code_snippet = $request["code_snippet"] ?? $snippet->code_snippet;
            $snippet->language = $request["language"] ?? $snippet->language;
            $snippet->keywords = $request["keywords"] ?? $snippet->keywords;
            $snippet->is_marked_favorite = filter_var($request->input('is_marked_favorite'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

            $snippet->save();

            return messageResponse(true, "Snippet updated Successfully", 200);
        } catch (\Throwable $e) {
            return errorMessageResponse(false, "Edit Error", $e->getMessage(), 401); //check status code
        }
    }

    public function deleteSnippet(Request $request)
    {
        try {
            //check if user who Created the snippet is same user trying to delete
            $userId = Auth::id();
            $snippet = Snippet::find($request["id"]);

            if ($snippet->user_id !== $userId) {
                return errorMessageResponse(false, "Unauthorized Edit", "This user is not authorized to edit on this snippet", 401); //check status code
            }

            $snippet->delete();
            return messageResponse(true, "Snippet deleted Successfully", 200);
        } catch (\Throwable $e) {
            return errorMessageResponse(false, "Error Delete", $e->getMessage(), 401); //check status code
        }
    }
}
