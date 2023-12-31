import React, { useContext } from "react";
import { addBlockApi } from "../../api/blockAPI";
import { projectContext, setProjectContext } from "../../provider/project";
import { blocksContext, setBlocksContext } from "../../provider/blocks";

export const ProjectAddBlock = () => {
    const project = useContext(projectContext);
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);

    const storeBlock = async () => {
        const gotBlocks = await addBlockApi(project.id, blocks.length);
        setBlocks(gotBlocks);
    };
    return (
        <div className="flex justify-center">
            <div
                onClick={storeBlock}
                className="w-14 h-14 text-center font-bold text-4xl mt-10 rounded-full border-2 border-blue-400"
            >
                +
            </div>
        </div>
    );
};
