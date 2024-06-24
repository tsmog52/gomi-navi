<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class schedule_pattern extends Model
{
    use HasFactory;

    protected $fillable = [
        'frequency',
        'interval',
        'days_of_week',
        'week_of_month',
        'day_of_month'
    ];
}
