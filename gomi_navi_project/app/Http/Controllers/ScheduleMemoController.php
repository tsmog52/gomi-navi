<?php

namespace App\Http\Controllers;

use App\Models\ScheduleMemo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ScheduleMemoController extends Controller
{

    public function index(Request $request)
    {
        //クッキーからuser_idを取得
        $userId = $request->cookie('user_id');

        if ($userId) {
            $memos = ScheduleMemo::where('user_id', $userId)->get();
        }

        return response()->json([
            'memos' => $memos
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
{
    // バリデーションを行い、入力データを取得
    $inputs = $request->validate([
        'title' => 'required|string',
        'note' => 'required|string',
        'user_id' => 'required|integer|exists:users,id',
    ]);

    // ScheduleMemoモデルを作成してデータを保存
    $scheduleMemo = new ScheduleMemo();
    $scheduleMemo->title = $inputs['title'];
    $scheduleMemo->note = $inputs['note'];
     // フロントエンドから送信されたユーザーIDを使用(整数にキャスト)
    $scheduleMemo->user_id = (int) $inputs['user_id'];

    $scheduleMemo->save();

    // 保存したスケジュールメモをレスポンスとして返す
    return response()->json([
        'scheduleMemo' => $scheduleMemo
    ], Response::HTTP_CREATED);
}

    public function destroy($id):JsonResponse
    {
            $scheduleMemo = ScheduleMemo::find($id);
            $scheduleMemo->delete();

            return response()->json(['message' => 'メモが削除されました']);
    }

    public function update(Request $request, $id)
    {
        $scheduleMemo = ScheduleMemo::find($id);
        if(!$scheduleMemo) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $scheduleMemo->title = $request->input('title');
        $scheduleMemo->note = $request->input('note');
        $scheduleMemo->save();

        return response()->json($scheduleMemo, 200);
    }

    public function show($id)
    {
        $scheduleMemo = ScheduleMemo::find($id);
        if (!$scheduleMemo) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($scheduleMemo, 200);
    }
}
