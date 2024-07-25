<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class LogoutController extends Controller
{
    // ログアウト処理
    public function logout(Request $request)
    {
        Auth::logout();
          // クッキーの削除
        $response = response()->json(['message' => '成功']);
        $response->withCookie(Cookie::forget('access_token'));
        $response->withCookie(Cookie::forget('user_id'));

        return $response;

    }
}
