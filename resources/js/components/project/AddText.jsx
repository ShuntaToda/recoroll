import React, { useContext } from "react";
import { PiTextTBold } from "react-icons/pi";
import { updateBlockApi } from "../../api/blockAPI";
import { blocksContext, setBlocksContext } from "../../provider/blocks";
import { findActiveBlock } from "../../features/findActiveBlock";

export const AddText = () => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const addText = async () => {
        const activeBlock = findActiveBlock(blocks);
        if (activeBlock) {
            $gotBlock = await updateBlockApi(activeBlock.value, {
                mode: "text",
                text: "text",
                position: { x: 0, y: 0 },
                rotate: 0,
                fontSize: 16,
                isBold: false,
            });
        }
    };
    return (
        <div onClick={addText}>
            <PiTextTBold></PiTextTBold>
        </div>
    );
};
