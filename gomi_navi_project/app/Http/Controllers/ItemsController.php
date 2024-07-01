<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Response;

class ItemsController extends Controller
{
    public function index() {
        $items = Item::paginate(8);
        $response = $items->map(function ($item) {
            return [
                //itemsテーブルからitem_nameカラムを取得
                'item_name' => $item->item_name,
                //itemsテーブルからcategories(FK)、category_nameカラムを取得
                'category_name' => $item->category->category_name,
                //itemsテーブルからitem_memoカラムを取得
                'item_memo' => $item->item_memo
                ];
                });
                return response()->json($response, Response::HTTP_OK);
            }
}
