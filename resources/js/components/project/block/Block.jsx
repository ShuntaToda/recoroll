import React, { useContext, useRef, useState } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
export const Block = ({ block, index, blockMenuOpen }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const blockEl = useRef(null);
    const [isTouch, setIsTouch] = useState(false);

    //アクティブにする処理
    const onActive = () => {
        setBlocks((prevBlock) => {
            prevBlock = prevBlock.map((block) => ({ ...block, active: false }));
            prevBlock[index].active = true;
            return prevBlock;
        });
    };

    //長押しする際の処理
    const longTouch = (e) => {
        blockMenuOpen(e, index);
    };
    //タッチを開始したときの処理
    const touchStart = () => {
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
            className={`bg-blue-200 ${block.active && "bg-red-200 "}`}
            ref={blockEl}
            onClick={onActive}
            onTouchStart={touchStart}
            onTouchEnd={(e) => touchEnd(e)}
        >
            {block.contents.texts.map((text) => (
                <Text text={text}></Text>
            ))}
        </div>
    );
};
