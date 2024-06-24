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
        Schema::table('schedules', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->foreignId('region_id')->constrained('regions')->onDelete('cascade');
            $table->foreignId('schedule_pattern_id')->constrained('schedule_patterns')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('schedules', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropForeign(['region_id']);
            $table->dropForeign(['schedule_pattern_id']);
        });
    }
};
