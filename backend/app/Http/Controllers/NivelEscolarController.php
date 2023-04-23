<?php

namespace App\Http\Controllers;

use App\Models\nivelEscolar;
use Illuminate\Http\Request;

class NivelEscolarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function __construct(nivelEscolar $nivelEscolar)
    {
        $this->nivelEscolar = $nivelEscolar;
    }


    public function index()
    {
        $nivelEscolar = $this->nivelEscolar::all();
        return response()->json($nivelEscolar, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->nivelEscolar->rules(), $this->nivelEscolar->feedback());

        if ($nivelEscolar = $this->nivelEscolar->create($request->all())){
            return response()->json($nivelEscolar, 200);

        }

        return response()->json(['erro' => 'Algo deu errado'], 500);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\nivelEscolar  $nivelEscolar
     * @return \Illuminate\Http\Response
     */
    public function show(nivelEscolar $nivelEscolar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\nivelEscolar  $nivelEscolar
     * @return \Illuminate\Http\Response
     */
    public function edit(nivelEscolar $nivelEscolar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\nivelEscolar  $nivelEscolar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, nivelEscolar $nivelEscolar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\nivelEscolar  $nivelEscolar
     * @return \Illuminate\Http\Response
     */
    public function destroy(nivelEscolar $nivelEscolar)
    {
        //
    }
}
