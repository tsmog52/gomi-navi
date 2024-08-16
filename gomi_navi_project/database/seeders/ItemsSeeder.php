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
            ],
            [
                'category_id' => '9',
                'item_name' => 'ギター',
            ],
            [
                'category_id' => '1',
                'item_name' => 'キッチンマット',
            ],
            [
                'category_id' => '7',
                'item_name' => '空気清浄機',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'クーラーボックス(金属製以外)',
                'item_memo' => '最長辺50cm未満のものは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '6',
                'item_name' => 'くもり止めスプレー(スプレータイプ)',
                'item_memo' => '中身を使い切ってから出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'クリーニングのハンガー(プラスチック製)',
            ],
            [
                'category_id' => '9',
                'item_name' => '車椅子',
            ],
            [
                'category_id' => '10',
                'item_name' => '携帯電話',
                'item_memo' => '専売ショップ等での回収をご利用ください。長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '携帯ラジオ',
                'item_memo' => '電池は使用済み乾電池として出してください。長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'ケーブル',
                'item_memo' => '散乱しないよう束ねて出してください。長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'ゲーム機(家庭用ゲーム機)',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。長辺30cm未満で、30cm×15cmの回収ボックスの投入口に入るものは小型家電としても出すことができますので、回収にご協力ください。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'ゲームソフト(CD-ROM型)(ケースを含む)',
            ],
            [
                'category_id' => '1',
                'item_name' => '化粧スプレー(ガラス製)',
                'item_memo' => '厚紙等に包み「ワレモノキケン」と表示して出してください。'
            ],
            [
                'category_id' => '2',
                'item_name' => '化粧スプレー(エアゾール缶)',
                'item_memo' => '中身を使い切って出してください。(穴あけは不要です。)プラスチック製のキャップはプラスチック製容器包装として出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '毛抜き・とげ抜き',
            ],
            [
                'category_id' => '10',
                'item_name' => '高圧ガスボンベ',
                'item_memo' => '市では収集できません。(販売店等に相談してください。)'
            ],
            [
                'category_id' => '8',
                'item_name' => 'コート',
                'item_memo' => '布類(古着・古布等)回収にご協力お願いします。(洗ってから出してください。)'
            ],
            [
                'category_id' => '1',
                'item_name' => 'ゴムマット',
            ],
            [
                'category_id' => '1',
                'item_name' => 'ゴムボール',
            ],
            [
                'category_id' => '1',
                'item_name' => 'カーペット',
                'item_memo' => '切断し最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'ゴルフクラブ',
                'item_memo' => 'ゴルフバッグとゴルフクラブ、ゴルフクラブのセット(14本まで)を1個の粗大ゴミとして出すことができます。'
            ],
            [
                'category_id' => '1',
                'item_name' => 'ゴルフボール',
            ],
            [
                'category_id' => '6',
                'item_name' => 'コンタクトレンズ(使い捨て)の容器',
                'item_memo' => '識別表示を確認して出してください。'
            ],
            [
                'category_id' => '5',
                'item_name' => '包装紙',
            ],
            [
                'category_id' => '9',
                'item_name' => 'サーフボード',
                'item_memo' => '概ね2mを超えるものは市では回収できません。(販売店等に相談してください。)'
            ],
            [
                'category_id' => '1',
                'item_name' => 'カーペット',
                'item_memo' => '切断し最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'サーモマグ',
            ],
            [
                'category_id' => '1',
                'item_name' => 'カーペット',
                'item_memo' => '切断し最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => '座椅子(非回転式)',
                'item_memo' => '5個までを1個の粗大ゴミとして出すことが出来ます。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'サイドテーブル',
                'item_memo' => '最長辺30cm未満のものは小物金属として出してください。'
            ],
            [
                'category_id' => '5',
                'item_name' => '雑紙',
            ],
            [
                'category_id' => '2',
                'item_name' => '殺虫剤(エアゾール缶)',
                'item_memo' => '中身を使い切って出してください。(穴あけは不要です。)'
            ],
            [
                'category_id' => '9',
                'item_name' => '座布団',
                'item_memo' => '座布団・クッションを5枚で1個の粗大ゴミとして出すことができます。最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '1',
                'item_name' => '皿(陶器・ガラス製)',
            ],
            [
                'category_id' => '1',
                'item_name' => 'CD等(ケースも含む)',
                'item_memo' => '普通ゴミとして出してください。紙製のジャケットはミックスペーパーとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '湿度計',
            ],
            [
                'category_id' => '9',
                'item_name' => '室内物干し(金属製)',
                'item_memo' => '最長辺30cm未満のものは小物金属として出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => '自転車',
            ],
            [
                'category_id' => '1',
                'item_name' => '自転車のタイヤ',
                'item_memo' => '最長辺50cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '自転車のチェーン',
            ],
            [
                'category_id' => '7',
                'item_name' => '自転車・バイクのカゴ',
                'item_memo' => '最長辺30cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '8',
                'item_name' => 'ジャケット',
                'item_memo' => '布類(古着・古布等)回収にご協力お願いします。(洗ってから出してください。)'
            ],
            [
                'category_id' => '7',
                'item_name' => 'シャベル',
                'item_memo' => '最長辺30cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'じゅうたん',
                'item_memo' => '切断し最長辺50cm未満のものは普通ゴミとして出すことができます。最長辺50cm以上は粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '5',
                'item_name' => 'シュレッダーした紙類',
                'item_memo' => '家庭から出るものは紙袋に入れて出してください。(ビニール袋では出さないでください。)'
            ],
            [
                'category_id' => '10',
                'item_name' => '消化器',
                'item_memo' => '市では回収できません。(購入した店、消化器リサイクル推進センターに相談してください。)'
            ],
            [
                'category_id' => '7',
                'item_name' => 'じょうろ(金属製)',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。'
            ],
            [
                'category_id' => '8',
                'item_name' => '書籍',
                'item_memo' => '資源集団回収の回収場所が分からない場合は、生活環境事業所に相談してください。'
            ],
            [
                'category_id' => '8',
                'item_name' => '新聞',
                'item_memo' => '資源集団回収の回収場所が分からない場合は、生活環境事業所に相談してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '水筒(金属製)',
                'item_memo' => '最長辺30cm以上のものは粗大ゴミとして出してください。プラスチック製のキャップなどは普通ゴミとして出してください。'
            ],
            [
                'category_id' => '8',
                'item_name' => 'スーツ',
                'item_memo' => '布類(古着・古布等)回収にご協力お願いします。(洗ってから出してください。)'
            ],
            [
                'category_id' => '1',
                'item_name' => 'スキー・スノーボード用ブーツ',
                'item_memo' => '切断し最長辺50cm以上のものは粗大ゴミとして出してください。(板・ストック・靴を1セットとして粗大ゴミで出すこともできます。)'
            ],
            [
                'category_id' => '9',
                'item_name' => 'スキー板、ストック',
                'item_memo' => '板・ストック・靴を1セットで出すことができます。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'スケートボード',
            ],
            [
                'category_id' => '7',
                'item_name' => 'スケート靴',
            ],
            [
                'category_id' => '1',
                'item_name' => 'すずり',
            ],
            [
                'category_id' => '7',
                'item_name' => 'スチーマー',
                'item_memo' => '最長辺30cm未満のものは小物金属として出してください。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'スノーボード板',
                'item_memo' => '板・靴を1セットで出すことができます。'
            ],
            [
                'category_id' => '2',
                'item_name' => 'スプレー缶',
                'item_memo' => '中身を使い切って出してください。(穴あけは不要です。)プラスチック製のキャップはプラスチック製容器包装として出してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => 'スライサー(金属製)',
            ],
            [
                'category_id' => '7',
                'item_name' => '整髪料の缶',
            ],
            [
                'category_id' => '9',
                'item_name' => '石膏ボード',
                'item_memo' => '最長辺50cm未満のものは普通ゴミとして出すことができます。ただし、業者が作業したものは市では収集できません。'
            ],
            [
                'category_id' => '10',
                'item_name' => '洗濯機',
                'item_memo' => '家電リサイクル法対象品目のため市では回収できません。購入した店、または家電リサイクル協定店へ依頼してください。'
            ],
            [
                'category_id' => '7',
                'item_name' => '洗濯ばさみ(金属製)',
            ],
            [
                'category_id' => '9',
                'item_name' => '扇風機',
                'item_memo' => '最長辺30cm未満のものは小物金属として出すことができます。'
            ],
            [
                'category_id' => '9',
                'item_name' => 'ソファー',
            ],
            [
                'category_id' => '9',
                'item_name' => '台車',
            ],
            [
                'category_id' => '8',
                'item_name' => 'タオル',
                'item_memo' => '布類(古着・古紙等)回収にご協力お願いします。(洗ってから出してください。)'
            ],
        ];

        foreach($items as $item) {
            Item::create($item);
        }
    }
}
