<?php

namespace Database\Seeders;

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
            SchedulePatternsSeeder::class,
            SchedulesTableSeeder::class,
        ]);
    }
}
