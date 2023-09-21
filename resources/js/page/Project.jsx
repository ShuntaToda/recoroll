import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlocksApi, storeBlockApi } from "../api/blockAPI";
import { ProjectHeader } from "../components/ProjectHeader";
import { getProject } from "../api/projectAPI";
import { ProjectMain } from "../components/ProjectMain";
import { ProjectFooter } from "../components/ProjectFooter";
import {
    ProjectProvider,
    projectContext,
    setProjectContext,
} from "../provider/project";
import { blocksContext, setBlocksContext } from "../provider/blocks";

export const Project = () => {
    const project = useContext(projectContext);
    const setProject = useContext(setProjectContext);
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const params = useParams();
    const { state } = useLocation();

    // const createBlock = async () => {
    //     const createdBlock = await storeBlockApi(params.id, 1);
    //     return createdBlock;
    // };

    useEffect(() => {
        // console.log(params);

        const fetch = async () => {
            const gotBlocks = await getBlocksApi(params.id);
            if (gotBlocks.length !== 0) {
                setBlocks(gotBlocks);
            }

            if (state) {
                setProject(state.project);
            } else {
                // projectを取得する処理
                const gotproject = await getProject(params.id);
                // console.log(gotproject);
                setProject(gotproject);
            }
        };
        fetch();
    }, []);
    return (
        <div>
            {project && (
                <div className="relative">
                    <ProjectHeader project={project}></ProjectHeader>
                    <ProjectMain></ProjectMain>
                    <ProjectFooter></ProjectFooter>
                </div>
            )}
        </div>
    );
};
