<?php

namespace App\Http\Controllers;
// use Google\Client;
// use Google\Service\Calendar;
// use Google\Service\Calendar\Event;
// use Laravel\Socialite\Facades\Socialite;
// use App\Models\SocialAccount;
// use App\Models\User;
// use App\Models\SocialPersonalAccessToken;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Http\Request;
// use Carbon\Carbon;

// class GoogleCalendarController extends Controller
// {
//     public function createEvent(Request $request)
//     {
//         try {
//             // Googleの認証情報を取得
//             $googleUser = Socialite::driver('google')->user();

//             // Googleの認証情報を使って、既存のSocialAccountを更新または新規作成
//             $socialAccount = SocialAccount::updateOrCreate(
//                 [
//                     'provider_id' => $googleUser->getId(),
//                     'provider' => 'google',
//                 ],
//                 [
//                     'google_token' => $googleUser->token,
//                     'google_refresh_token' => $googleUser->refreshToken,
//                 ]
//             );

//             // SocialAccountに紐づくユーザーを取得、存在しない場合は新規作成
//             $user = $socialAccount->user;

//             if (!$user) {
//                 $user = User::create(); // ユーザーが存在しない場合の新規作成方法を追加してください
//             }

//             // SocialAccountとUserの関連付け
//             $socialAccount->user_id = $user->id;
//             $socialAccount->save();

//             // PersonalAccessTokenの更新または新規作成
//             $personalAccessToken = SocialPersonalAccessToken::updateOrCreate(
//                 [
//                     'user_id' => $user->id,
//                 ],
//                 [
//                     'token' => $googleUser->token,
//                     'refresh_token' => $googleUser->refreshToken ?? null,
//                     'expires_at' => Carbon::now()->addSeconds($googleUser->expiresIn),
//                 ]
//             );

//             // ユーザーをログインさせる
//             Auth::login($user);

//             // GoogleカレンダーのIDを.envファイルから取得
//             $calendarId = env('GOOGLE_CALENDAR_ID', 'primary');

//             // Google Clientの初期化と認証情報の設定
//             $client = new Client();
//             $client->setApplicationName('Your Application Name'); // アプリケーション名を設定
//             $client->setAccessToken($googleUser->token); // アクセストークンを設定
//             // 以下は必要に応じて追加の設定を行う
//             // $client->setClientId('YOUR_CLIENT_ID');
//             // $client->setClientSecret('YOUR_CLIENT_SECRET');

//             // Googleカレンダーサービスの初期化
//             $service = new Calendar($client);

//             // 新しいイベントを作成
//             $event = new Event([
//                 'summary' => '普通ゴミ',
//                 'start' => [
//                     'dateTime' => '2024-07-01T08:00:00',
//                     'timeZone' => 'Asia/Tokyo',
//                 ],
//                 'recurrence' => [
//                     'RRULE:FREQ=WEEKLY;BYDAY=WE,SA;UNTIL=20351231T000000Z',
//                     'EXDATE;TZID=Asia/Tokyo:' . implode(',', $this->getExcludedDates()),
//                 ],
//             ]);

//             // イベントをカレンダーに挿入
//             $event = $service->events->insert($calendarId, $event);

//             // 成功メッセージと共にリダイレクト
//             return redirect()->back()->with('success', 'Event created: ' . $event->getHtmlLink());
//         } catch (\Exception $e) {
//             return back()->withError('Failed to create event: ' . $e->getMessage());
//         }
//     }

//     // 除外日付を取得するメソッド
//     public function getExcludedDates()
//     {
//         $excludedDates = [];

//         for ($year = 2024; $year <= 2035; $year++) {
//             $excludedDates[] = $year . '1231T000000';
//             $excludedDates[] = ($year + 1) . '0101T000000';
//             $excludedDates[] = ($year + 1) . '0102T000000';
//             $excludedDates[] = ($year + 1) . '0103T000000';
//         }

//         return $excludedDates;
//     }
// }
use Illuminate\Http\Request;
use Google\Client as GoogleClient;
use App\Models\SocialPersonalAccessToken;
use Google\Service\Calendar as GoogleCalendar;

class GoogleCalendarController extends Controller
{
    public function addEvent(Request $request)
    {
        // ユーザーが認証されていることを確認
    // $user = $request->user();
    // if (!$user) {
    //     return response()->json(['error' => 'Unauthenticated.'], 401);
    // }

    // // SocialPersonalAccessToken モデルからユーザーに関連付けられたトークンを取得
    // $accessToken = SocialPersonalAccessToken::where('user_id', $user->id)->first();

    // if (!$accessToken) {
    //     return response()->json(['error' => 'Access token not found.'], 404);
    // }
    public function addEvent(Request $request)
    {
        // Google API クライアントの初期化と設定
        $client = new GoogleClient();
        $client->useApplicationDefaultCredentials();
        $client->setScopes(GoogleCalendar::CALENDAR_EVENTS);

        // Google Calendar API クライアントの初期化
        $calendar = new GoogleCalendar($client);

        // イベントの情報を作成
        $event = new GoogleCalendar\Event([
            'summary' => 'イベントのタイトル',
            'description' => 'イベントの詳細',
            'start' => [
                'dateTime' => '2024-07-13T17:00:00+09:00',
                'timeZone' => 'Asia/Tokyo',
            ],
            'end' => [
                'dateTime' => '2024-07-13T18:00:00+09:00',
                'timeZone' => 'Asia/Tokyo',
            ],
        ]);

        // カレンダーにイベントを追加
        $calendarId = 'primary'; // 主なカレンダーを使用する場合は'primary'を使用
        $event = $calendar->events->insert($calendarId, $event);

        // 成功した場合の処理
        return response()->json($event);
    }
}
