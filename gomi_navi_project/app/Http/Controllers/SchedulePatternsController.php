<?php

namespace App\Http\Controllers;

use App\Models\SchedulePattern;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;


class SchedulePatternsController extends Controller
{
    public function index() {
        $schedulePatterns = SchedulePattern::all();
        return response() ->json([
            'schedulePatterns' => $schedulePatterns
        ], Response::HTTP_OK);
    }
}
