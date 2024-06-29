<?php

use Illuminate\Support\Facades\Route;


Route::view('/contact', 'contact');


Route::view('/calender', 'calender');

Route::view('/item', 'item');

Route::view('/index', 'categories');

Route::view('/schedule_patterns', 'sorting_guides');





Route::view('/', 'app');