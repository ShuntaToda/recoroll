import React, { useContext, useEffect, useState } from "react";
import { ProjectAddBlock } from "./ProjectAddBlock";
import { projectContext, setProjectContext } from "../../provider/project";
import { blocksContext, setBlocksContext } from "../../provider/blocks";
import { Block } from "./block/Block";
import { BlockMenu } from "./block/BlockMenu";

export const ProjectMain = () => {
    const project = useContext(projectContext);
    const setProject = useContext(setProjectContext);
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const [isBlockMenuOpen, setIsBlockMenuOpen] = useState(false);
    const [blockMenuPosition, setBlockMenuPosition] = useState({ x: 0, y: 0 });

    const blockMenuOpen = (e, index) => {
        setIsBlockMenuOpen(true);
        const selectedBlockRect = e.target.getBoundingClientRect();
        setBlockMenuPosition({
            x: selectedBlockRect.x,
            y: window.scrollY + selectedBlockRect.y,
        });
        setBlocks((prevBlock) => {
            prevBlock = prevBlock.map((block) => ({ ...block, active: false }));
            prevBlock[index].active = true;
            return prevBlock;
        });
    };

    const handleClickMain = () => {
        setIsBlockMenuOpen(false);
    };

    useEffect(() => {
        console.log(blocks);
    }, [blocks]);
    return (
        <div className="pb-10 relative" onClick={handleClickMain}>
            {isBlockMenuOpen && (
                <BlockMenu blockMenuPosition={blockMenuPosition}></BlockMenu>
            )}
            {blocks.map((block, index) => (
                <Block
                    blockMenuOpen={blockMenuOpen}
                    key={block.id}
                    block={block}
                    index={index}
                ></Block>
            ))}
            <ProjectAddBlock
                blocks={blocks}
                project={project}
            ></ProjectAddBlock>
        </div>
    );
};
