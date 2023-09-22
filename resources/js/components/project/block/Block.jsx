import React, { useContext } from "react";
import { blocksContext, setBlocksContext } from "../../../provider/blocks";

export const Block = ({ block, index }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const onActive = () => {
        setBlocks((prevBlock) => {
            prevBlock = prevBlock.map((block) => ({ ...block, active: false }));
            prevBlock[index].active = true;
            return prevBlock;
        });
    };
    return (
        <div
            key={block.id}
            style={{ height: "300px" }}
            className={`bg-blue-200 ${block.active && "bg-red-200"}`}
            onClick={onActive}
        ></div>
    );
};
