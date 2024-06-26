<?php

use Illuminate\Support\Facades\Route;


Route::view('/contact', 'contact');


Route::view('/calender', 'calender');

Route::view('/sorting_search', 'sorting_search');

Route::view('/index', 'categories');



Route::view('/', 'app');