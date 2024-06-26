<?php

namespace Database\Seeders;

use App\Models\SchedulePattern;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RegionsTableSeeder::class,
            CategoriesTableSeeder::class,
            SortingGuidesTableSeeder::class,
            ItemsSeeder::class,
            SchedulePattern::class
        ]);
    }
}
