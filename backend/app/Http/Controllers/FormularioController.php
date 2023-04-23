<?php

namespace App\Http\Controllers;

use App\Models\formulario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Sendmail;
class FormularioController extends Controller
{

    public function __construct(formulario $formulario)
    {
        $this->formulario = $formulario;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formulario = $this->formulario::all();
        return response()->json($formulario, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->merge(['ip_address' => $request->ip()]);
        $request->validate($this->formulario->rules(), $this->formulario->feedback());

        if ($request->file('curriculum')->isValid()) {
            $curriculumPath = $request->file('curriculum')->store('curriculos');
            $formulario = $this->formulario->create($request->all());
            $formulario->curriculum = $curriculumPath;
            $formulario->save();


            $data = $formulario->toArray();
            Mail::to($formulario->email)->send(new Sendmail($data));
            return response()->json($formulario, 200);
        }


        return response()->json(['erro' => 'Algo deu errado'], 500);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\formulario  $formulario
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $formulario = $this->formulario->find($id);

        if ($formulario === null) {
            return response()->json(['erro' => 'Recurso pesquisado não existe'], 404);
        }
        return  response()->json($formulario, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\formulario  $formulario
     * @return \Illuminate\Http\Response
     */


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\formulario  $formulario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $formulario = $this->formulario->find($id);

        if ($formulario === null) {
            return response()->json(['erro' => 'Recurso pesquisado não existe'], 404);
        }

        $formulario->update($request->all());
        return response()->json($formulario, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\formulario  $formulario
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $formulario = $this->Alas->find($id);

        if ($formulario === null) {
            return response()->json(['erro' => 'Impossível realizar a exclusão. O recurso solicitado não existe'], 404);
        }

        $formulario->delete();
        return response()->json(['msg' => 'formulário foi removido com sucesso!'],);
    }
}
