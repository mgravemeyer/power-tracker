<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Data;

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'data' => Data::all(),
    ]);
});


Route::post('/api/v1/data', function () {
    $data = new Data();
    $data->value = request()->input('value');
    $data->time = request()->input('time');
    $data->save();
    return response()->json(['message' => 'created', 'data' =>$data], 200);
});

require __DIR__.'/auth.php';
