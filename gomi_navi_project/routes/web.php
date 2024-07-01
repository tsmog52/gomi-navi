<?php

use Illuminate\Support\Facades\Route;

//お問い合わせ
Route::view('/contact', 'contact');
//カレンダー
Route::view('/calendar', 'calendar');
//ゴミの分別検索
Route::view('/item', 'item');
//カテゴリー
Route::view('/category', 'categories');
//メイン
Route::view('/', 'app');
