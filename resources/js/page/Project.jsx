import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlocksApi, storeBlockApi } from "../api/blockAPI";
import { ProjectHeader } from "../components/ProjectHeader";
import { getProject } from "../api/projectAPI";
import { ProjectMain } from "../components/ProjectMain";
import { ProjectFooter } from "../components/ProjectFooter";

export const Project = () => {
    const params = useParams();
    const [blocks, setBlocks] = useState([]);
    const { state } = useLocation();
    const [project, setProject] = useState();

    const createBlock = async () => {
        const createdBlock = await storeBlockApi(params.id, 1);
        return createdBlock;
    };

    useEffect(async () => {
        console.log(params);
        const gotBlocks = await getBlocksApi(params.id);
        if (gotBlocks.length !== 0) {
            setBlocks(gotBlocks);
        } else {
            setBlocks(createBlock());
        }

        console.log(state, params);
        if (state) {
            setProject(state.project);
        } else {
            // projectを取得する処理
            const gotproject = await getProject(params.id);
            console.log(gotproject);
            setProject(gotproject);
        }
    }, []);

    return (
        <div>
            {project !== undefined && (
                <div className="relative">
                    <ProjectHeader project={project}></ProjectHeader>
                    <ProjectMain blocks={blocks}></ProjectMain>
                    <ProjectFooter></ProjectFooter>
                </div>
            )}
        </div>
    );
};
