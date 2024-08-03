<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CsrfTokenController extends Controller
{
    public function getCsrfCookie(Request $request)
    {
        // クッキーにアクセストークンが存在するか確認
        if ($request->hasCookie('access_token')) {
            // CSRFトークンを発行
            return response()->json();
        } else {
            // 認証されていない場合の応答
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
}
