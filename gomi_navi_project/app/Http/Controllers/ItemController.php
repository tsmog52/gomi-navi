<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ItemController extends Controller
{
    public function index(Request $request) {
        // 全てのアイテムを取得
        $allItems = Item::all();

        // ページネーションを適用する
        $perPage = $request->input('per_page', 9); // ページごとのアイテム数、デフォルトは9
        $items = Item::paginate($perPage);

        // 取得したアイテムを整形
        $response = $items->items();
        $response = array_map(function ($item) {
            return [
                'id' => $item->id,
                'category_id' => $item->category_id,
                'item_name' => $item->item_name,
                'item_memo' => $item->item_memo,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'category_name' => $item->category->category_name ?? 'カテゴリなし'
            ];
        }, $response);

        // データをJSONに変換し、ページネーションの情報と全体のデータを含める
        return response()->json([
            'data' => $response,
            'all_items' => $allItems,
            'current_page' => $items->currentPage(),
            'last_page' => $items->lastPage(),
            'next_page_url' => $items->nextPageUrl(),
            'prev_page_url' => $items->previousPageUrl(),
            'per_page' => $items->perPage(),
            'total' => $items->total(),
        ], Response::HTTP_OK);
    }

    public function allItems() {
        // 全てのアイテムを取得
        $allItems = Item::all();

        // アイテムデータを整形して返す
        $response = $allItems->map(function ($item) {
            return [
                'id' => $item->id,
                'category_id' => $item->category_id,
                'item_name' => $item->item_name,
                'item_memo' => $item->item_memo,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'category_name' => $item->category->category_name ?? 'カテゴリなし'
            ];
        });

        return response()->json([
            'data' => $response,
        ], Response::HTTP_OK);
    }

}
