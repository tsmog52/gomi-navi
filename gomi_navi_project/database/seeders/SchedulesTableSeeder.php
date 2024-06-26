<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Schedule;

class SchedulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $schedules = [
            [
                'category_id' => '5',
                'region_id' => '6',
                'schedule_pattern_id' => '1'
            ],
            [
                'category_id' => '6',
                'region_id' => '6',
                'schedule_pattern_id' => '2'
            ],
            [
                'category_id' => '1',
                'region_id' => '6',
                'schedule_pattern_id' => '3'
            ],
            [
                'category_id' => '2',
                'region_id' => '6',
                'schedule_pattern_id' => '4'
            ],
            [
                'category_id' => '3',
                'region_id' => '6',
                'schedule_pattern_id' => '4'
            ],
            [
                'category_id' => '4',
                'region_id' => '6',
                'schedule_pattern_id' => '4'
            ],
            [
                'category_id' => '9',
                'region_id' => '6',
                'schedule_pattern_id' => '5'
            ],
            [
                'category_id' => '7',
                'region_id' => '6',
                'schedule_pattern_id' => '5'
            ]
        ];

        foreach($schedules as $schedule) {
            Schedule::create($schedule);
        }
    }
}
