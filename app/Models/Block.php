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

    public function handleDelete($block_id, $project_id)
    {
        Block::find($block_id)->delete();
        $blocks = Block::where("project_id", $project_id)->get();
        foreach ($blocks as $index => $block) {
            // 順番ごとにorderを設定する
            $blocks->update(["order" => $index]);
        }

        return $blocks;
    }
}
