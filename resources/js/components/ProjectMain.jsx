import React from "react";
import { ProjectAddBlock } from "./ProjectAddBlock";

export const ProjectMain = ({ blocks }) => {
    console.log(blocks);
    return (
        <div>
            {blocks.map((block, index) => (
                <div
                    key={block.id}
                    style={{ height: "300px" }}
                    className="bg-blue-200"
                ></div>
            ))}
            <ProjectAddBlock></ProjectAddBlock>
        </div>
    );
};
