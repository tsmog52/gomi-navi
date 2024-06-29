<?php

namespace App\Http\Controllers;

use App\Models\SortingGuide;
use Illuminate\Http\Response;

class SortingGuidesController extends Controller
{
    public function index() {
        $sortingGuides = SortingGuide::with('category')->get();
        $response = $sortingGuides->map(function ($sortingGuide) {
            return [
                //sorting_guidesテーブルからinstructionカラムを取得
                'instructions' => $sortingGuide->instruction,
                //sorting_guidesテーブルからcategories(FK)、category_nameカラムを取得
                'category_name' => $sortingGuide->category->category_name
            ];
        });
        return response()->json($response, Response::HTTP_OK);
    }
}
