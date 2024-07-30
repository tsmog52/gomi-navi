<?php

namespace App\Http\Controllers;

use App\Models\ScheduleMemo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ScheduleMemoController extends Controller
{

    public function index()
    {
        $memos = ScheduleMemo::all();
        return response()->json([
            'memos' => $memos
        ], Response::HTTP_OK);
    }

    // public function store(Request $request)
    // {
    //     // 認証されたユーザーを取得
    //     $user = $request->user();


    //     // ユーザーが存在しない場合のエラーハンドリング
    //     if (!$user) {
    //         return response()->json(['error' => 'Not found'], 404);
    //     }

    //     // バリデーションを行い、入力データを取得
    //     $inputs = $request->validate([
    //         'note' => 'required|string',
    //     ]);

    //     // ScheduleMemoモデルを作成してデータを保存
    //     $scheduleMemo = new ScheduleMemo();
    //     $scheduleMemo->note = $inputs['note'];
    //     $scheduleMemo->user_id = $user->id;
    //     $scheduleMemo->save();

    //     // 保存したスケジュールメモをレスポンスとして返す
    //     return response()->json([
    //         'scheduleMemo' => $scheduleMemo
    //     ], Response::HTTP_CREATED);
    // }
    public function store(Request $request)
{
    // バリデーションを行い、入力データを取得
    $inputs = $request->validate([
        'note' => 'required|string',
        'user_id' => 'required|integer|exists:users,id', // ユーザーIDのバリデーション
    ]);

    // ScheduleMemoモデルを作成してデータを保存
    $scheduleMemo = new ScheduleMemo();
    $scheduleMemo->note = $inputs['note'];
    $scheduleMemo->user_id = $inputs['user_id']; // フロントエンドから送信されたユーザーIDを使用
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
