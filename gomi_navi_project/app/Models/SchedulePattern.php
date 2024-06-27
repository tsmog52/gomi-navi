<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchedulePattern extends Model
{
    use HasFactory;

    protected $table = 'schedule_patterns';

    protected $fillable = [
        'id',
        'frequency',
        'interval',
        'days_of_week',
        'week_of_month',
        'day_of_month'
    ];
}
