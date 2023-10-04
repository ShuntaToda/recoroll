<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $project_id)
    {

        // $path = $request->file->store("public/photos");
        $path = $request->file->store("public/" . $project_id . "/photos");
        $url = "/storage/" . $project_id . "/photos/" . basename($path);

        $photo = Photo::create([
            "project_id" => $project_id,
            "title" => $request->title,
            "url" => $url,
        ]);

        return response()->json($photo);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
