<?php

use Illuminate\Database\Seeder;
use App\User;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        // $candidates = Candidate::lists('id');
        foreach(range(1, 50) as $index)
        {
            User::create([
                'username' => $faker->userName(),
                'name' => $faker->name(),
                'phone' => $faker->e164PhoneNumber(),
                'password' => 'secret',
                'postcode' => $faker->postcode(),
            ]);
        }
    }
}
