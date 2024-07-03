<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Http\Controllers\SchedulesController;
use App\Models\SortingGuide;


Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);

Route::get('/instruction', [SortingGuidesController::class, 'index']);

Route::get('/items', [ItemsController::class, 'index']);

Route::get('/calendar', [SchedulesController::class, 'index']);



