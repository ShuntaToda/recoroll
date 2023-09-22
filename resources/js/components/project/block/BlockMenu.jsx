import React, { useContext, useEffect } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
import { deleteBlockApi } from "../../../api/blockAPI";

export const BlockMenu = ({ blockMenuPosition }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const deleteBlock = async () => {
        const [selectedBlock] = blocks.filter((block) => block.active);
        setBlocks((prevBlocks) => prevBlocks.filter((block) => !block.active));
        const gotBlocks = await deleteBlockApi(selectedBlock);
    };
    return (
        <div
            onClick={deleteBlock}
            className="absolute bg-white p-5 text-red-600 rounded-md"
            style={{ top: blockMenuPosition.y, left: blockMenuPosition.x }}
        >
            X
        </div>
    );
};
