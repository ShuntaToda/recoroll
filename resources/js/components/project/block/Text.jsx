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
    block,
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const handleTouchStart = (e) => {
        e.stopPropagation();
        setSelectedItem({
            mode: props.mode,
            blockIndex: blockIndex,
            index: index,
        });
    };
    const handleTouchEnd = async (e) => {
        e.stopPropagation();
        setBlocks((prevBlocks) => {
            prevBlocks[blockIndex].contents.texts[index].position = position;
            console.log(prevBlocks);
            return [...prevBlocks];
        });

        const gotBlock = await updateBlockApi(block, "text", [
            ...block.contents.texts,
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

    const deleteText = async () => {
        setSelectedItem({ ...selectedItem, mode: "" });
        setBlocks((prevBlocks) => {
            prevBlocks[blockIndex].contents.texts.splice(index, 1);
            return [...prevBlocks];
        });

        // const gotBlock = await updateBlockApi(block, "text", [
        //     ...block.contents.texts,
        // ]);
    };
    return (
        <div
            className={`${
                selectedItem.mode == "text" &&
                selectedItem.index == index &&
                selectedItem.blockIndex == blockIndex &&
                "border-2"
            } p-3 absolute`}
            style={{ top: position.y, left: position.x }}
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
        >
            <div
                className="absolute -top-4 -left-4 text-red-600"
                style={{
                    display:
                        selectedItem.mode == "text" &&
                        selectedItem.index == index &&
                        selectedItem.blockIndex == blockIndex
                            ? "block"
                            : "none",
                }}
                onClick={deleteText}
            >
                X
            </div>
            <div
                style={{
                    fontSize: props.fontSize,
                    fontWeight: props.isBold ? "bold" : "normal",
                    color: props.color,
                    rotate: props.rotate + "deg",
                }}
            >
                Text
            </div>
        </div>
    );
};
