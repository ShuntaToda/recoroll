import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlocksApi, storeBlockApi } from "../api/blockAPI";

export const Project = () => {
    const params = useParams();
    const [blocks, setBlocks] = useState([]);

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
    }, []);

    useEffect(() => {
        console.log(blocks);
    }, [blocks]);
    return <div>Project</div>;
};
