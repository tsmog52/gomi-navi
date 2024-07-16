<?php

namespace Database\Seeders;

use App\Models\ScheduleMemo;
use Illuminate\Database\Seeder;

class MemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $memos = [
            [
                'user_id' => '7',
                'note' => 'テスト1'
            ],
            [
                'user_id' => '7',
                'note' => 'テスト2'
            ],
        ];

        foreach($memos as $memo) {
            ScheduleMemo::create($memo);
        }
    }
}
