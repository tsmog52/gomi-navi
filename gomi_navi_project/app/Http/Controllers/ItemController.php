<?php
namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Response;

class ItemController extends Controller
{
    public function index() {
        $items = Item::paginate(9);

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

        // データをJSONに変換し、ページネーションの情報を含める
        return response()->json([
            'data' => $response,
            'current_page' => $items->currentPage(),
            'last_page' => $items->lastPage(),
            'next_page_url' => $items->nextPageUrl(),
            'prev_page_url' => $items->previousPageUrl(),
            'per_page' => $items->perPage(),
            'total' => $items->total(),
        ], Response::HTTP_OK);
    }
}

