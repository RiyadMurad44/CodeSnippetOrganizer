<?php

namespace Database\Seeders;

use App\Models\Snippet;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SnippetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Snippet::factory(2)->create();
        // Snippet::factory()->count(2)->create();
    }
}
