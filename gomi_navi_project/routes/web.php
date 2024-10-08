<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LineController;
use App\Http\Controllers\GoogleController;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;
use App\Http\Controllers\LineBotController;

//CSRFトークンを取得するためのエンドポイント
Route::get('/sanctum/csrf-cookie', function () {
  return response()->json();
});

// GoogleAuthのルート
Route::get('login/google', [GoogleController::class, 'redirectToGoogle']);
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

// LINEAuthのルート
Route::get('/auth/line', [LineController::class, 'redirectToLine']);
Route::get('/auth/line/callback', [LineController::class, 'callback']);

//LINEメッセージ受信・送信用
Route::post('/line/webhook', [LineBotController::class, 'reply'])
    ->withoutMiddleware(ValidateCsrfToken::class);

//どのURLでも1つのページでレンダリングされるようにする
Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');

