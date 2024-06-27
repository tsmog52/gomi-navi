<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SchedulePatternsController;
use App\Models\SortingGuide;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/sorting_guides', [SortingGuide::class, 'index']);

Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);


