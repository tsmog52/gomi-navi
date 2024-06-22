<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sorting_guide extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'instruction'
    ];
}
