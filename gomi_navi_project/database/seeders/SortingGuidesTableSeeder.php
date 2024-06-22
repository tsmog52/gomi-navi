<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SortingGuide;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SortingGuidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sorting_guides')->truncate();

        //category_idを参照
        $regularTrashCategory = Category::where('category_name', '普通ゴミ')->first();
        $cansPlasticBottlesCategory = Category::where('category_name', '空き缶・ペットボトル')->first();
        $bottlesCategory = Category::where('category_name', '空きビン')->first();
        $batteriesCategory = Category::where('category_name', '使用済み乾電池')->first();
        $paperCategory = Category::where('category_name', 'ミックスペーパー')->first();
        $plasticCategory = Category::where('category_name', 'プラスチック製容器包装')->first();
        $metalItemsCategory = Category::where('category_name', '小物金属')->first();
        $cardboardCategory = Category::where('category_name', 'ダンボール')->first();
        $bulkyWasteCategory = Category::where('category_name', '粗大ゴミ(有料)')->first();
        $nonCollectableItemsCategory = Category::where('category_name', '収集品目外')->first();

        //普通ゴミ
        SortingGuide::create([
            'category_id' => $regularTrashCategory->id,
            'instruction' =>'普通ゴミの収集は、週2回です。ふた付きポリ容器または透明・半透明袋(指定の袋はありません。また、中身が確認できない黒い袋等は使用しないでください。)で出してください。'
        ]);

        //空き缶・ペットボトル
        SortingGuide::create([
            'category_id' => $cansPlasticBottlesCategory->id,
            'instruction' =>'空き缶・ペットボトルの収集は、週1回です。透明・半透明袋で出してください。中を軽くすすぎ、ペットボトルはボトル本体とキャップ、ラベルを分けなるべくつぶして出してください。缶とペットボトルは一緒に袋へ入れてください。'
        ]);

        //空きビン
        SortingGuide::create([
            'category_id' => $bottlesCategory->id,
            'instruction' =>'空きビンの収集は、週1回です。キャップを外し中を洗ってから袋に入れずに、「びん」のみを「空きびん入れ」に入れてください。対象となる空きびんは、飲料びん・調味料びんなどの食品のびんです。'
        ]);

        //使用済み乾電池
        SortingGuide::create([
            'category_id' => $batteriesCategory->id,
            'instruction' =>'使用済み乾電池の収集は、週1回です。透明の袋に入れて「資源物集積所」に出してください。市で収集するものは、積層型・筒型乾電池・リチウムコイン乾電池（型式記号CR及びBR）のみです。'
        ]);

        //ミックスペーパー
        SortingGuide::create([
            'category_id' => $paperCategory->id,
            'instruction' =>'ミックスペーパーの収集は、週1回です。「紙袋に入れる」または「ひもでむすぶ」のいずれかの方法で出してください。'
        ]);

        //プラスチック製容器包装
        SortingGuide::create([
            'category_id' => $plasticCategory->id,
            'instruction' =>'プラスチック製容器包装の収集は、週1回です。中身を使い切って軽くすすぐか、汚れをふき取ってきれいにしてから、中身の見える透明・半透明の袋に入れて出してください。'
        ]);

        //小物金属
        SortingGuide::create([
            'category_id' => $metalItemsCategory->id,
            'instruction' =>'小物金属の回収は、月2回です。なべ、フライパン、やかん等の調理用品は「柄、取っ手、注ぎ口」含まずに長さを測り、30cmに満たないものは小物金属として収集します（30cm以上の場合は粗大ごみ）。かさ・針金ハンガーは30cmを超えてもOKです。袋に入れず、そのままの状態で（散乱しやすいものは、ひもまたはテープで束ねて）出してください。くぎ、ネジなどの小さなものは、透明の袋に入れて出してください。'
        ]);

        //ダンボール
        SortingGuide::create([
            'category_id' => $cardboardCategory->id,
            'instruction' =>'段ボールなどの古紙類等は、町内会・自治会・学校PTA・マンション管理組合などの実施団体と回収業者が協力して、資源集団回収という仕組みで回収を行っています。そのため、お住まいの地域により回収場所・回収日が異なります。回収場所・回収日等が分からない場合は、お住まいの地域の町内会やマンション管理組合、学校PTA、またはご近所の方にお尋ねになるか、お住まいの区を所管している生活環境事業所へ電話または電子メール（またはファックス）でお問合せください。'
        ]);

        //粗大ゴミ
        SortingGuide::create([
            'category_id' => $bulkyWasteCategory->id,
            'instruction' =>'粗大ゴミの収集は、月に2回で有料です。対象は家庭で使用していた30cm以上の金属製品、50cm以上の家具類です。収集日の3日前までにインターネットまたは電話で申し込んでください。'
        ]);

        //収集品目外
        SortingGuide::create([
            'category_id' => $nonCollectableItemsCategory->id,
            'instruction' =>'重量がきわめて重いもの（100kg以上）、長さがきわめて長いもの（2m以上）、
            処理作業に危害（爆発、火災など）を及ぼす恐れのあるもの、有害物質などの処理困難物は収集しません。 購入店に引取りを依頼してください。'
        ]);
    }
}
