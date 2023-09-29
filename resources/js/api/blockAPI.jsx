import axios from "axios";

const exchangeContent = (data) => {
    const result = data.map((d) => ({
        ...d,
        contents: JSON.parse(d.contents),
    }));

    console.log(result);
    return result;
};

export const getBlocksApi = async (projectId) => {
    try {
        const { data } = await axios.get(`/api/block/${projectId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const result = exchangeContent(data);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const addBlockApi = async (projectId, order) => {
    try {
        const { data } = await axios.post(
            `/api/block/${projectId}`,
            { order: order },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(data);
        return exchangeContent(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateBlockApi = async (block, mode, props) => {
    try {
        const { data } = await axios.put(
            `/api/block/${block.id}`,
            {
                block: block,
                texts: mode == "text" ? props : block.contents.texts,
                photos: mode == "photo" ? props : block.contents.photos,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const [result] = exchangeContent([data]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const deleteBlockApi = async (blockId, projectId) => {
    try {
        const { data } = await axios.delete(
            `/api/block/${blockId}/${projectId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return exchangeContent(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};
