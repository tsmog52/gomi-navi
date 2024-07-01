<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Models\Schedule;

class SchedulesController extends Controller
{
    public function index() {
    $schedules = Schedule::all();
    $response = $schedules->map(function ($schedule) {
        return [
            //itemsテーブルからitem_nameカラムを取得
            'days_of_week' => $schedule->schedulePattern->days_of_week,
            //itemsテーブルからcategories(FK)、category_nameカラムを取得
            'category_name' => $schedule->category->category_name,
            ];
            });
            return response()->json($response, Response::HTTP_OK);
    }
}
