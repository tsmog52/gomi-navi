<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;

class RegionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Region::insert([
            [ 'region_name' => '川崎区'],
            [ 'region_name' => '幸区'],
            [ 'region_name' => '中原区'],
            [ 'region_name' => '高津区'],
            [ 'region_name' => '宮前区'],
            [ 'region_name' => '多摩区'],
            [ 'region_name' => '麻生区'],
        ]);
    }
}
