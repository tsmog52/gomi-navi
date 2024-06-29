<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class SortingGuide extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'instruction'
    ];
    public function category() {
        return $this->belongsTo(Category::class);
    }
}
