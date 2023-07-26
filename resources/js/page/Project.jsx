import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlocksApi, storeBlockApi } from "../api/blockAPI";
import { ProjectHeader } from "../components/ProjectHeader";

export const Project = () => {
    const params = useParams();
    const [blocks, setBlocks] = useState([]);
    const { state } = useLocation();
    const [project, setProject] = useState();

    const createBlock = async () => {
        const createdBlock = await storeBlockApi(params.id, 1);
        return createdBlock;
    };

    const getBlocks = () => {};

    useEffect(() => {
        console.log(params);
        const getBlocks = async () => {
            return await getBlocksApi();
        };
        const gotBlocks = getBlocks(params.id);
        if (gotBlocks.length) {
            setBlocks(gotBlocks);
        } else {
            setBlocks(createBlock());
        }
        const getProject = async () => {};

        if (state.project) {
            setProject(state.project);
        } else {
            // projectを取得する処理
            setProject({ name: "aaa" });
        }
    }, []);

    useEffect(() => {
        console.log(blocks);
    }, [blocks]);
    return (
        <div>
            {project !== undefined && (
                <ProjectHeader project={project}></ProjectHeader>
            )}
        </div>
    );
};
