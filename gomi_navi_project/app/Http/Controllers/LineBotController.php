<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use LINE\Clients\MessagingApi\Configuration;
use LINE\Clients\MessagingApi\Api\MessagingApiApi;
use LINE\Clients\MessagingApi\Model\TextMessage;
use LINE\Clients\MessagingApi\Model\ReplyMessageRequest;
use LINE\Clients\MessagingApi\ApiException;
use LINE\Webhook\Model\MessageEvent;
use LINE\Webhook\Model\TextMessageContent;
use LINE\Parser\EventRequestParser;
use Illuminate\Support\Facades\Log;

class LineBotController extends Controller
{
    public function reply(Request $request)
    {
        // チャネルシークレットとチャネルアクセストークンを読み込む
        $channelSecret = env('LINE_MESSAGING_CHANNEL_SECRET');
        $channelToken = env('LINE_MESSAGING_ACCESS_TOKEN');

        // Webhookイベントを取得する
        $httpRequestBody = $request->getContent();

        // 署名を検証する（Messaging APIから送られたものであるかチェック）
        $hash = hash_hmac('sha256', $httpRequestBody, $channelSecret, true);
        $signature = base64_encode($hash);
        if ($signature !== $request->header('X-Line-Signature')) return;

        // LINEBOTクライアントを作成
        $client = new Client();
        $config = new Configuration();
        $config->setAccessToken($channelToken);

        // LINE Messaging APIを作成
        $messagingApi = new MessagingApiApi(
            client: $client,
            config: $config,
        );

        try {
            // イベントリクエストをパース
            $parsedEvents = EventRequestParser::parseEventRequest($httpRequestBody, $channelSecret, $signature);

            // イベントは配列で来るのでforeachで回す
            foreach ($parsedEvents->getEvents() as $event) {

                // メッセージイベント以外は無視
                if (!($event instanceof MessageEvent)) continue;

                // メッセージを取得
                $eventMessage = $event->getMessage();

                // テキストメッセージ以外は無視
                if (!($eventMessage instanceof TextMessageContent)) continue;

                // テキストメッセージを取得
                $eventMessageText = $eventMessage->getText();
                $region = ['川崎区', '幸区', '中原区', '宮前区', '高津区', '多摩区', '麻生区'];

                if (in_array($eventMessageText, $region)) {
                $setRegion = new TextMessage([
                    'type' => 'text',
                    'text' => '地区を設定しました。',
                ]);
            } else {
                $setRegion = null;
            }

                // 応答メッセージを作成
                $message = new TextMessage([
                    'type' => 'text',
                    'text' => 'メッセージありがとうございます',
                ]);

                // 応答リクエストを作成
                $request = new ReplyMessageRequest([
                    'replyToken' => $event->getReplyToken(),
                    'messages' => [$setRegion ?? $message],
                ]);

                // 応答リクエストを送信する
                $response = $messagingApi->replyMessageWithHttpInfo($request);

                // レスポンスをチェックする（エラーの場合の処理）
                $responseBody = $response[0];
                $responseStatusCode = $response[1];
                if ($responseStatusCode != 200) {
                    throw new \Exception($responseBody);
                }
            }

            return;

        } catch (ApiException $e) {
            // エラー内容をログに出力
            Log::error($e->getCode() . ':' . $e->getResponseBody());
        }
    }
}
