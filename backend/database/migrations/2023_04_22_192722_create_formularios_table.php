<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('intended_position');
            $table->string('schooling_id');
            $table->string('comments')->nullable();
            $table->string('curriculum');
            $table->dateTime('date_time');
            $table->string('ip_address');
            $table->timestamps();
            $table->foreign('schooling_id')->references('schooling')->on('nivel_escolars');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formularios');
    }
}
