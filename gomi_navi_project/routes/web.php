<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LineController;
use App\Http\Controllers\GoogleController;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;

// HTTPSを強制する設定
if (env('APP_ENV') == 'production') {
  \Illuminate\Support\Facades\URL::forceScheme('https');
}

//CSRFトークンを取得するためのエンドポイント
Route::get('/sanctum/csrf-cookie', function () {
  return response()->json();
});

// GoogleAuthのルート
Route::get('login/google', [GoogleController::class, 'redirectToGoogle']);
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

// LINEAuthのルート
Route::get('auth/line', [LineController::class, 'redirectToLine']);
Route::get('auth/line/callback', [LineController::class, 'callback']);

//LINEメッセージ受信用
Route::post('/line/webhook', [LineController::class, 'webhook'])
    ->withoutMiddleware(ValidateCsrfToken::class);

//LINEメッセージ送信用
Route::get('/line/message', [LineController::class, 'message']);

//どのURLでも1つのページでレンダリングされるようにする
Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');

