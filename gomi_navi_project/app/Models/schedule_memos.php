<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule_memos extends Model
{
    use HasFactory;

    protected $fillable = [
        'schedule_id',
        'user_id',
        'note'
    ];
}
