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
        Schema::create('schedule_patterns', function (Blueprint $table) {
            $table->id();
            $table->enum('frequency', ['DAILY', 'WEEKLY', 'MONTHLY']);
            $table->integer('interval')->nullable();
            $table->set('days_of_week', ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']);
            $table->set('week_of_month', ['1', '2', '3', '4', '5'])->nullable();
            $table->integer('day_of_month')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedule_patterns');
    }
};
