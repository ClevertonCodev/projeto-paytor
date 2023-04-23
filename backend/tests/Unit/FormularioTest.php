<?php

namespace Tests\Unit;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use App\Mail\Sendmail;
use Tests\TestCase;

class FormularioTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testStore()
    {

        $data = [
            'name' => 'Cleverton',
            'email' => 'clevertonsantoscodev@gmail.com',
            'phone' => '84994105215',
            'intended_position' => 'Desenvolvedor',
            'schooling_id' => 'Ensino Superior',
            'date_time' => '2023-04-22 19:00',
            'curriculum' => UploadedFile::fake()->create('curriculo.pdf', 1000),
            'comments' => 'Gostaria de trabalhar com vocês!',
            'ip_address' => '127.0.0.1'

        ];
        $response = $this->json('POST', '/api/formulario', $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('formularios', [
            'name' => 'Cleverton',
            'email' => 'clevertonsantoscodev@gmail.com',
            'phone' => '84994105215',
            'intended_position' => 'Desenvolvedor',
            'schooling_id' => 'Ensino Superior',
            'date_time' => '2023-04-22 19:00',
            'curriculum' => 'curriculos/' . $data['curriculum']->hashName(),
            'comments' => 'Gostaria de trabalhar com vocês!',

            'ip_address' => '127.0.0.1'
        ]);

        Mail::send(new Sendmail($data));

    }

}
