<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\TrustProxies; // 追加
use Illuminate\Http\Request; // 追加

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //SPA認証
        $middleware->statefulApi();
        // 暗号化を無効
        $middleware->encryptCookies(except: [
            'access_token',
            'user_id',
        ]);
        // TrustProxies ミドルウェアの設定
        $middleware->web(append: [
            TrustProxies::class,
        ]);
        $middleware->trustProxies(at: '*', headers: Request::HEADER_X_FORWARDED_AWS_ELB);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
