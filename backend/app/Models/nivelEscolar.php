<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nivelEscolar extends Model
{
    use HasFactory;
    protected $fillable = [
        'schooling'
    ];

    public function rules()
    {
        return  [
            'schooling' => 'required|unique:nivel_escolars'.$this->id,

        ];
    }

    public function feedback()
    {
        return [
            'required'=> 'O campo :attribute é obrigatório',
            'schooling.unique' => 'Esse Nível já consta no sistema',
        ];
    }
}
