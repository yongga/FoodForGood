<?php

use Illuminate\Database\Seeder;
use App\ProductDetail;
use App\User;
use App\Product;
use Faker\Factory as Faker;

class ProductDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$faker = Faker::create();
    	$users = User::all()->pluck('id')->all();
        $products = Product::all()->pluck('id')->all();
        
    	foreach(range(1, 50) as $index)
        {
        	ProductDetail::create([
                'bought_date' => $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now'),
                'expiry_date' => $faker->dateTimeBetween($startDate = '+1 year', $endDate = '+2 year'),
                'product_id' => $faker->randomElement($products),
                'user_id' => $faker->randomElement($users),
            ]);
	    	
	    }
        //
    }
}
