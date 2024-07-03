<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    // ログアウト処理
    public function logout()
    {
        Auth::logout();
        return redirect()->route('home');
    }
}
