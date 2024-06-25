<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Category;


class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::select('category_name')->get();
        return response()->json([
            'categories' => $categories
        ], Response::HTTP_OK);
    }
}
