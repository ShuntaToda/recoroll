<?php

namespace App\Http\Controllers;

use App\Models\Block;
use Illuminate\Http\Request;

class BlockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($project_id)
    {
        $blocks = Block::where("project_id", $project_id)->get();
        return response()->json($blocks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $project_id)
    {
        $blocks = Block::handleAdd($project_id, $request->order);
        return response()->json($blocks);
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
    public function update(Request $request, $project_id, $block_id)
    {
        $block = Block::find($block_id)->first();
        $block->update([
            "contents" => json_encode([
                "texts" => $request->block->contents->texts,
                "photos" => $request->block->contents->photos,
            ]),
            "order" => $request->block->order,
        ]);

        return response()->json($block);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($block_id, $project_id)
    {
        $result_blocks = Block::handleDelete($block_id, $project_id);
        return response()->json($result_blocks);
        return $result_blocks;
    }
}
