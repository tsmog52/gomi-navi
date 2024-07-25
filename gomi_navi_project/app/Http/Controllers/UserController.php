<?php

namespace App\Http\Controllers;

use App\Models\SocialPersonalAccessToken;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user(Request $request)
    {
        // リクエストからアクセストークンを取得
        $accessToken = $request->bearerToken();

        // トークンが存在するか確認
        if (!$accessToken) {
            return response()->json(['error' => 'Token not provided'], 400);
        }

        // トークンからユーザーを取得
        $token = SocialPersonalAccessToken::where('token', $accessToken)->first();

        // トークンが見つからない場合のエラーハンドリング
        if (!$token) {
            return response()->json(['error' => 'Token not found'], 404);
        }

        $user = $token->user;

        // ユーザーが存在しない場合のエラーハンドリング
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }
}
