import React, { useContext, useEffect, useState } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
import { findActiveBlock } from "../../../features/findActiveBlock";
import { updateBlockApi } from "../../../api/blockAPI";

export const Text = ({
    props,
    index,
    setSelectedItem,
    selectedItem,
    blockEl,
    blockIndex,
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const handleTouchStart = () => {
        setSelectedItem({ mode: props.mode, index: index });
    };
    const handleTouchEnd = async (e) => {
        e.stopPropagation();
        const activeBlock = findActiveBlock(blocks);
        setBlocks((prevBlocks) => {
            prevBlocks[activeBlock.index].contents.texts[index].position =
                position;
            console.log(prevBlocks);
            return [...prevBlocks];
        });

        const gotBlock = await updateBlockApi(activeBlock.value, "text", [
            ...activeBlock.value.contents.texts,
        ]);
        console.log(gotBlock);
    };
    const handleTouchMove = (e) => {
        console.log(
            e.changedTouches[0].clientY,
            blockEl.current.getBoundingClientRect().top
        );
        const blockRect = blockEl.current.getBoundingClientRect();
        setPosition({
            x: e.changedTouches[0].clientX - blockRect.left,
            y: e.changedTouches[0].clientY - blockRect.top,
        });
    };

    useEffect(() => {
        // console.log(blocks[blockIndex].contents.texts[index]);
        setPosition({
            x: blocks[blockIndex].contents.texts[index].position.x,
            y: blocks[blockIndex].contents.texts[index].position.y,
        });
    }, []);
    return (
        <div
            className={`${
                selectedItem.mode == "text" &&
                selectedItem.index == index &&
                "border-2"
            } p-3 absolute`}
            style={{ top: position.y, left: position.x }}
            onTouchStart={handleTouchStart}
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
        >
            <div>Text</div>
        </div>
    );
};
