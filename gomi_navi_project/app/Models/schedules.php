<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class schedules extends Model
{
    use HasFactory;

    protected $fillable = [
        'collection_day',
        'category_id',
        'region_id'
    ];
}
