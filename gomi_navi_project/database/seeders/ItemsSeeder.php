<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Item;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'category_id' => '7',
                'item_name' => 'アームスタンド',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' =>'7',
                'item_name' => 'IH調理器',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' =>'7',
                'item_name' => 'ICレコーダー',
                'item_memo' => '最長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'アイシャドウチップ'
            ],
            [
                'category_id' => '1',
                'item_name' => 'アイスクラッシャー(プラスチック)',
            ],
            [
                'category_id' => '7',
                'item_name' => 'アイスクラッシャー(金属製)',
            ],
            [
                'category_id' => '7',
                'item_name' => 'アイスクリームメーカー',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'アイスピック',
                'item_memo' => '厚紙等で包み「刃物キケン」と表示して出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'アイスボックス',
                'item_memo' => '最長辺50cm未満のものは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'アイマスク',
            ],
            [
                'category_id' => '7',
                'item_name' => 'アイロン',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'アイロン台',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'アウトドア用椅子(金属製)',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'アクセサリー',
                'item_memo' => '金属製以外のものは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '握力計',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'アクリルケース',
                'item_memo' => '最長50辺cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'アコーディオンカーテン',
            ],
            [
                'category_id' => '9',
                'item_name' => 'アコーディオンドア'
            ],
            [
                'category_id' => '9',
                'item_name' => '足蹴り自転車',
            ],
            [
                'category_id' => '9',
                'item_name' => '足蹴り乗用玩具(おもちゃ車)',
                'item_memo' => 'プラスチック製・木製で最長辺50cm未満のものは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => '足ひれ(フィン)',
                'item_memo' => '最長辺50cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '10',
                'item_name' => 'エアコン',
                'item_memo' => '家電リサイクル法対象品目のため市では回収できません。購入した店、または家電リサイクル協定店へ依頼してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'エスプレッソマシーン',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '10',
                'item_name' => 'カーシート',
                'item_memo' => '市では回収できません。(販売店等に相談してください。)'
            ],
            [
                'category_id' => '7',
                'item_name' => 'カーステレオ',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '8',
                'item_name' => 'カーテン',
                'item_memo' => '布類(古着・古紙等)回収にご協力お願いします。(洗ってから出してください。)破けているもの、ぬれているものは、最長辺が50cm未満になるように畳んで、普通ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'カーテンフック(金属製)',
            ],
            [
                'category_id' => '7',
                'item_name' => 'ガーデンライト',
                'item_memo' => '電池は使用済み乾電池として出してください。電球が外せる場合は「ワレモノキケン」と表示して普通ゴミに出してください。最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'カードケース(金属製)',
            ],
            [
                'category_id' => '1',
                'item_name' => 'カーペット',
                'item_memo' => '切断し最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '傘',
                'item_memo' => '30cm以上のものでも小物金属として収集します。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'サーモマグ'
            ],
            [
                'category_id' => '9',
                'item_name' => '座椅子(回転式)'
            ],
            [
                'category_id' => '9',
                'item_name' => '座椅子(回転式を除く)',
                'item_memo' => '5個までを1個の粗大ゴミとして出すことができます。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'サイドテーブル',
                'item_memo' => '最長辺50cm未満のものは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => '財布',
            ]
        ];

        foreach($items as $item) {
            Item::create($item);
        }
    }
}
