<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('links', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->unique();
            $table->string('link', 60)->unique();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('sp_user_id')->nullable();
            $table->foreign('sp_user_id')->references('sp_id')->on('users');
            $table->unsignedBigInteger('sp_link_id')->nullable();
            $table->foreign('sp_link_id')->references('id')->on('links');
            $table->boolean('active')->default(0);
            $table->timestamp('date_activated');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links');
    }
}
