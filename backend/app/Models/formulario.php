<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class formulario extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'intended_position',
        'schooling_id',
        'comments',
        'curriculum',
        'date_time',
        'ip_address'

    ];


    public function rules()
    {
        return  [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'intended_position' => 'required',
            'schooling_id' => 'required',
            'comments' => 'nullable|max:250',
            'curriculum' => 'required|mimes:doc,docx,pdf|max:1024',
            'date_time' => 'required',
            'ip_address'  => 'required'
        ];
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :attribute é obrigatório.',
            'email' => 'O endereço de email fornecido não é válido.',
            'curriculum.mimes' => 'O currículo deve ser um arquivo do tipo: doc, docx ou pdf',
            'curriculum.max' => 'O currículo deve ter no máximo 1MB.',
            'comments.max' => 'A obsevação deve ter no máximo 250 caracteres.'

        ];
    }

    public function  formulario() {
        return $this->belongsTo(nivelEscolar::class);
    }
}

