<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('social_personal_access_tokens', function (Blueprint $table) {
            $table->id();
            // アクセストークンを示す
            $table->string('token', 255)->unique();
            $table->string('refresh_token')->nullable();;
            // ユーザーまたはクライアントが持つ権限や能力を示す
            $table->text('abilities')->nullable();
            // 最後にアクセストークンが使用された日時を示す
            $table->timestamp('last_used_at')->nullable();
            // アクセストークンの有効期限を示す
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('social_personal_access_tokens');
    }
};

