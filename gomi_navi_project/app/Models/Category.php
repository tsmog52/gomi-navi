<?php

namespace App\Models;

use App\Http\Controllers\ItemsController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SortingGuide;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_name',
    ];

    public function sortingGuides() {
        return $this->hasOne(SortingGuide::class);
    }

    public function Items() {
        return $this->hasOne(Item::class);
    }
}
