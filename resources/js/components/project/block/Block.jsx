import React, { useContext, useRef, useState } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";
export const Block = ({ block, index, blockMenuOpen }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const blockEl = useRef(null);
    const [isTouch, setIsTouch] = useState(false);

    const onActive = () => {
        setBlocks((prevBlock) => {
            prevBlock = prevBlock.map((block) => ({ ...block, active: false }));
            prevBlock[index].active = true;
            return prevBlock;
        });
    };

    const longTouch = (e) => {
        blockMenuOpen(e, index);
    };
    const touchStart = () => {
        setIsTouch(true);
        setTimeout(() => setIsTouch(false), 1000);
    };
    const touchEnd = (e) => {
        console.log(e);
        if (!isTouch) {
            longTouch(e);
        }
    };
    return (
        <div
            key={block.id}
            style={{ height: "300px" }}
            className={`bg-blue-200 ${block.active && "bg-red-200"}`}
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
