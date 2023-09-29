import React, { useContext, useEffect, useRef, useState } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
import { Text } from "./Text";
export const Block = ({ block, blockIndex, blockMenuOpen }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const blockEl = useRef(null);
    const [isTouch, setIsTouch] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ mode: "", index: 0 });

    //長押しする際の処理
    const longTouch = (e) => {
        blockMenuOpen(e, blockIndex);
    };
    //タッチを開始したときの処理
    const touchStart = () => {
        //アクティブにする処理
        setBlocks((prevBlock) => {
            prevBlock = prevBlock.map((block) => ({ ...block, active: false }));
            prevBlock[blockIndex].active = true;
            return prevBlock;
        });
        setIsTouch(true);
        // 0.7秒の間setIsTouchをtrueにする
        setTimeout(() => setIsTouch(false), 700);
    };
    // タッチを終了したとき
    const touchEnd = (e) => {
        if (!isTouch) {
            longTouch(e);
        }
    };
    return (
        <div
            key={block.id}
            style={{ height: "300px" }}
            className={`bg-blue-200 ${block.active && "bg-red-200 "} relative`}
            ref={blockEl}
            onTouchStart={touchStart}
            onTouchEnd={(e) => touchEnd(e)}
        >
            {block.contents.texts.map((props, index) => (
                <Text
                    key={index}
                    props={props}
                    index={index}
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                    blockEl={blockEl}
                    blockIndex={blockIndex}
                ></Text>
            ))}
        </div>
    );
};
