import React, { useContext, useEffect } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
import { deleteBlockApi } from "../../../api/blockAPI";

export const BlockMenu = ({ blockMenuPosition }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    // ブロック削除処理
    const deleteBlock = async () => {
        // アクティブのブロックの取得
        const [selectedBlock] = blocks.filter((block) => block.active);
        // 削除されたブロック以外の設定
        setBlocks((prevBlocks) => prevBlocks.filter((block) => !block.active));
        // 削除ブロックの更新
        const gotBlocks = await deleteBlockApi(selectedBlock);
    };

    // ブロック追加処理
    const addBlock = () => {
        // アクティブのブロックのindex取得
        const selectedBlockIndex = blocks.findIndex(
            (item) => item.active == true
        );
        console.log(selectedBlockIndex);
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
