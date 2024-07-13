<?php

namespace App\Http\Controllers;

use App\Models\ScheduleMemo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ScheduleMemoController extends Controller
{
    public function store(Request $request)
    {
        // 認証されたユーザーを取得
        $user = $request->user();

        // ユーザーが存在しない場合のエラーハンドリング
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // バリデーションを行い、入力データを取得
        $inputs = $request->validate([
            'note' => 'required|string',
        ]);

        // ScheduleMemoモデルを作成してデータを保存
        $scheduleMemo = new ScheduleMemo();
        $scheduleMemo->note = $inputs['note'];
        $scheduleMemo->user_id = $user->id;
        $scheduleMemo->save();

        // 保存したスケジュールメモをレスポンスとして返す
        return response()->json([
            'scheduleMemo' => $scheduleMemo
        ], Response::HTTP_CREATED);
    }
}
