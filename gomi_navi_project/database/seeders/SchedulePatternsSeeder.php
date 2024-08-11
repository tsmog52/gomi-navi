<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SchedulePattern;

class SchedulePatternsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $schedule_patterns = [
            [
                'frequency' => 'WEEKLY',
                'days_of_week' => 'MO'
            ],
            [
                'frequency' => 'WEEKLY',
                'days_of_week' => 'TU'
            ],
            [
                'frequency' => 'WEEKLY',
                'days_of_week' => 'WE,SA'
            ],
            [
                'frequency' => 'WEEKLY',
                'days_of_week' => 'FR'
            ],
            [
                'frequency' => 'MONTHLY',
                'days_of_week' => 'FR',
                'week_of_month'=> ['1', '3']
            ]
        ];

            foreach($schedule_patterns as $schedule_pattern) {
                SchedulePattern::create($schedule_pattern);
            }
    }
}
