<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Snippet extends Model
{
    /** @use HasFactory<\Database\Factories\SnippetFactory> */
    use HasFactory;

    protected $fillable = ['code_snippet', 'language', 'keywords', 'is_marked_favorite'];

    protected $casts = [
        'is_marked_favorite' => 'boolean'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
