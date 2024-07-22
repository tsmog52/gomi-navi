<?php

use Illuminate\Foundation\Application;
use Laravel\Sanctum\Http\Middleware\CheckAbilities;
use Laravel\Sanctum\Http\Middleware\CheckForAnyAbility;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;


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
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
