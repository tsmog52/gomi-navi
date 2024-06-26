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
        //schedules
        Schema::table('schedules', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id')->after('id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');

            $table->unsignedBigInteger('region_id')->after('category_id');
            $table->foreign('region_id')->references('id')->on('regions')->onDelete('cascade');
        });

        //items
        Schema::table('items', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id')->after('id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');

            $table->unsignedBigInteger('guide_id')->after('category_id');
            $table->foreign('guide_id')->references('id')->on('sorting_guides')->onDelete('cascade');
        });

        //schedule_memos
        Schema::table('schedule_memos', function (Blueprint $table) {
            $table->unsignedBigInteger('schedule_id')->after('id');
            $table->foreign('schedule_id')->references('id')->on('schedules')->onDelete('cascade');

            $table->unsignedBigInteger('user_id')->after('schedule_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        //item_size_categories
        Schema::table('item_size_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('item_id')->after('id');
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');

            $table->unsignedBigInteger('category_id')->after('item_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');

            $table->unsignedBigInteger('size_id')->after('category_id');
            $table->foreign('size_id')->references('id')->on('sizes')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //personal_access_tokens
        // Schema::table('personal_access_tokens', function (Blueprint $table) {
        //     if (Schema::hasTable('users')) {
        //         $table->dropForeign(['user_id']);
        //     }
        // });

         //schedules
        Schema::table('schedules', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropForeign(['region_id']);
            $table->dropColumn(['category_id', 'region_id']);
        });

        //items
        Schema::table('items', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropForeign(['guide_id']);
            $table->dropColumn(['category_id', 'guide_id']);
        });

        //schedule_memos
        Schema::table('schedule_memos', function (Blueprint $table) {
            $table->dropForeign(['schedule_id']);
            $table->dropForeign(['user_id']);
            $table->dropColumn(['schedule_id', 'user_id']);
        });

        //item_size_categories
        Schema::table('item_size_categories', function (Blueprint $table) {
            $table->dropForeign(['item_id']);
            $table->dropForeign(['category_id']);
            $table->dropForeign(['size_id']);
            $table->dropColumn(['item_id', 'category_id', 'size_id']);
        });
    }
};
