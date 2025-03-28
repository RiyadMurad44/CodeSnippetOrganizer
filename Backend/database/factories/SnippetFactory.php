<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Snippet>
 */
class SnippetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'  => \App\Models\User::factory(),
            'code_snippet' => fake()->text(50),
            'language' => fake()->text(20),
            'keywords' => fake()->text(30)
        ];
    }
}
