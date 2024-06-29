<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'region_id',
        'schedule_pattern_id'
    ];

    public function categories() {
        return $this->belongsTo(Category::class);
    }

}
