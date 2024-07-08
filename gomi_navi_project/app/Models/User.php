<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;

class User extends  AuthenticatableUser implements AuthenticatableContract
{
    use HasFactory;

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
