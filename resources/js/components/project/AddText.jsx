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
            const gotBlock = await updateBlockApi(activeBlock.value, "text", [
                ...activeBlock.value.contents.texts,
                {
                    mode: "text",
                    text: "text",
                    position: { x: 0, y: 0 },
                    rotate: 0,
                    fontSize: 30,
                    isBold: false,
                    color: "#333333",
                },
            ]);
            setBlocks((prevBlocks) => {
                prevBlocks[activeBlock.index] = gotBlock;
                prevBlocks[activeBlock.index].active = true;
                return [...prevBlocks];
            });
        }
    };
    return (
        <div onClick={addText}>
            <PiTextTBold></PiTextTBold>
        </div>
    );
};
