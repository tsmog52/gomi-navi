<?php

namespace App\Http\Controllers;

use App\Models\ScheduleMemo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ScheduleMemoController extends Controller
{
    public function store(Request $request)
    {
        $inputs = $request->validate([
                'note' => 'required|string',
                'schedule_id' => 'required|exists:schedules,id',
        ]);

        $scheduleMemo = new ScheduleMemo();
        $scheduleMemo->note = $inputs['note'];
        $scheduleMemo->schedule_id = $inputs('schedule_id');
        $scheduleMemo->user_id = Auth::id();
        $scheduleMemo->save();

        return response()->json([
            'scheduleMemo' => $scheduleMemo
        ], Response::HTTP_OK);
    }
}
