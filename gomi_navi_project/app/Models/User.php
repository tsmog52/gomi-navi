<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function socialPersonalAccessTokens()
    {
        return $this->hasMany(SocialPersonalAccessToken::class);
    }

    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function scheduleMemos()
    {
        return $this->hasMany(ScheduleMemo::class);
    }


    // 認証のために必要なメソッド
    public function getAuthIdentifierName()
    {
        return 'id';
    }
}
