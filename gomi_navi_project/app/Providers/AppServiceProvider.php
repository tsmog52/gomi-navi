<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
        Event::listen(function (\SocialiteProviders\Manager\SocialiteWasCalled $event) {
            // Log::info('SocialiteWasCalled event fired');
            $event->extendSocialite('line', \SocialiteProviders\Line\Provider::class);
        });
    }
}
