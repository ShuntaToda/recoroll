import React, { useContext, useEffect } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
import { addBlockApi, deleteBlockApi } from "../../../api/blockAPI";
import { projectContext } from "../../../provider/project";

export const BlockMenu = ({ blockMenuPosition }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const project = useContext(projectContext);

    // ブロック削除処理
    const deleteBlock = async () => {
        // アクティブのブロックの取得
        const [selectedBlock] = blocks.filter((block) => block.active);
        // 削除されたブロック以外の設定
        // 削除ブロックの更新
        const gotBlocks = await deleteBlockApi(selectedBlock.id, project.id);
        setBlocks(gotBlocks);
    };

    // ブロック追加処理
    const addBlock = async () => {
        // アクティブのブロックのindex取得
        const selectedBlockIndex = blocks.findIndex(
            (item) => item.active == true
        );
        const gotBlocks = await addBlockApi(project.id, selectedBlockIndex + 1);
    };
    return (
        <div
            className="absolute bg-white p-4 text-center mt-3 ml-3 rounded-md"
            style={{ top: blockMenuPosition.y, left: blockMenuPosition.x }}
        >
            <div
                onClick={addBlock}
                className="text-blue-600 py-2 border-b-2 border-gray-300"
            >
                add
            </div>
            <div onClick={deleteBlock} className="text-red-600 py-2">
                delete
            </div>
        </div>
    );
};
