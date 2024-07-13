<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class LogoutController extends Controller
{
    // ログアウト処理
    public function logout(Request $request)
    {
        //ユーザーをログアウト
        Auth::guard('web')->logout();

        // セッションを無効化し、新しいCSRFトークンを生成
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // クッキーを削除
        $response = new Response('', 204);
        $response->withCookie(Cookie::forget('auth_token'));

        return $response;
    }
}
