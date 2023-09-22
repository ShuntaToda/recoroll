import React, { useContext, useEffect, useState } from "react";
import { ProjectAddBlock } from "./ProjectAddBlock";
import { projectContext, setProjectContext } from "../../provider/project";
import { blocksContext, setBlocksContext } from "../../provider/blocks";
import { Block } from "./block/Block";

export const ProjectMain = () => {
    const project = useContext(projectContext);
    const setProject = useContext(setProjectContext);
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    useEffect(() => {
        console.log(blocks);
    }, [blocks]);
    return (
        <div className="pb-10">
            {blocks.map((block, index) => (
                <Block key={block.id} block={block} index={index}></Block>
            ))}
            <ProjectAddBlock
                blocks={blocks}
                project={project}
            ></ProjectAddBlock>
        </div>
    );
};
