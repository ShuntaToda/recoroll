<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $fillable = [
        "project_id",
        "contents",
        "order",
    ];
    use HasFactory;

    static function handleDelete($block_id, $project_id)
    {
        Block::find($block_id)->delete();
        $blocks = Block::where("project_id", $project_id)->get();
        foreach ($blocks as $index => $block) {
            // return $index;
            // 順番ごとにorderを設定する
            $block->update(["order" => $index]);
        }

        return $blocks;
    }

    static function handleAdd($project_id, $order)
    {
        function create($project_id, $order)
        {
            $block = Block::create([
                "project_id" => $project_id,
                "contents" => json_encode([
                    "texts" => [],
                    "photos" => [],
                ]),
                "active" => false,
                "order" => $order,
            ]);
            return $block;
        }
        $blocks = Block::where("project_id", $project_id)->get();
        if ($blocks->isEmpty()) {
            $block = create($project_id, 0);
            return [$block];
        } else if (!isset($blocks[$order])) {

            $block = create($project_id, $order);

            $blocks = Block::where("project_id", $project_id)->orderBy("order")->get();
            return $blocks;
        } else {
            foreach ($blocks as $index => $block) {
                if ($index >= $order) {
                    if ($index == $order) {
                        create($project_id, $index);
                    }
                    $block->update(["order" => $index + 1]);
                }
            }
            $blocks = Block::where("project_id", $project_id)->orderBy("order")->get();
            return $blocks;
        }
    }
}
