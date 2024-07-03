<?php

namespace App\Http\Controllers;

use App\Models\ScheduleMemo;
use Illuminate\Http\Request;

class ScheduleMemoController extends Controller
{
    public function save(Request $request)
    {
        $request->validate(
            ['note' => 'require|string']
        );


        ScheduleMemo::create([
            'note' => $request->note
        ]);
    }
}
