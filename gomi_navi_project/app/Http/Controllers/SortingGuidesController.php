<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Models\SortingGuide;

class SortingGuidesController extends Controller
{
    public function index() {
        $instructions = SortingGuide::select('instruction')->get();
        return response() ->json([
            'instructions' => $instructions
        ], Response::HTTP_OK);
    }
}
