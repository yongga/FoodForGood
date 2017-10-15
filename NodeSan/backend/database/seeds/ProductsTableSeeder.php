<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
	public function run()
    {
	    // Let's truncate our existing records to start from scratch.
	    // Product::truncate();

	    $faker = \Faker\Factory::create();

	    // And now, let's create a few products in our database:
	    for ($i = 0; $i < 50; $i++) {
	        Product::create([
	            'name' => $faker->sentence(3),
	            'image_url' => $faker->imageUrl,
	        ]);
	    }
	}
}
