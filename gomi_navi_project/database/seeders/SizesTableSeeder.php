<?php

namespace Database\Seeders;

use App\Models\Size;
use Illuminate\Database\Seeder;

class SizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sizes = [
            ['size_range' => '30cm未満'],
            ['size_range' => '30cm以上']
        ];

        foreach($sizes as $size) {
            Size::create($size);
        }
    }
}
