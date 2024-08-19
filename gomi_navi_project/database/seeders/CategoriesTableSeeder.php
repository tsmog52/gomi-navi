<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['category_name' => '普通ゴミ'],
            ['category_name' => '空き缶・ペットボトル'],
            ['category_name' => '空きビン'],
            ['category_name' => '使用済み乾電池'],
            ['category_name' => 'ミックスペーパー'],
            ['category_name' => 'プラスチック製容器包装'],
            ['category_name' => '小物金属'],
            ['category_name' => 'ダンボール'],
            ['category_name' => '粗大ゴミ(有料)'],
            ['category_name' => '収集品目外'],
        ];

        foreach($categories as $category) {
            Category::create($category);
        }
    }
}
