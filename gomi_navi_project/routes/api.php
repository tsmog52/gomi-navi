<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Models\SortingGuide;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']);
//スケジュールパターンテーブルから取得
Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);

Route::get('/instruction', [SortingGuidesController::class, 'index']);

Route::get('/items', [ItemsController::class, 'index']);



