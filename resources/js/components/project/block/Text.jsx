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
    };
    const handleTouchMove = (e) => {
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
        setBlocks((prevBlocks) => {
            prevBlocks[blockIndex].contents.texts.splice(index, 1);
            return [...prevBlocks];
        });
        setSelectedItem({ ...selectedItem, mode: "" });
    };
    const handleChangeText = (e) => {
        console.log(e.target.value);
        setBlocks((prevBlocks) => {
            prevBlocks[blockIndex].contents.texts[index].text = e.target.value;
            return [...prevBlocks];
        });
    };

    useEffect(() => {
        if (
            selectedItem.mode == "text" &&
            selectedItem.blockIndex == blockIndex &&
            selectedItem.index == index
        ) {
            const updateBlock = async () => {
                const gotBlock = await updateBlockApi(
                    blocks[blockIndex],
                    "text",
                    blocks[blockIndex].contents.texts
                );
            };
            // 削除時のアップデートの処理を行うときsetStateがあとに処理をしてしまうため一時的にsetTimeoutで様子見
            setTimeout(updateBlock, 100);
            // updateBlock();
        }
    }, [blocks]);

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
            <input
                style={{
                    fontSize: props.fontSize,
                    fontWeight: props.isBold ? "bold" : "normal",
                    color: props.color,
                    rotate: props.rotate + "deg",
                    width: props.text.length * props.fontSize + "px",
                }}
                className="bg-transparent block w-full"
                value={props.text}
                onInput={(e) => handleChangeText(e)}
            ></input>
        </div>
    );
};
