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
export const storeBlockApi = async (projectId, order) => {
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
        const result = { ...data, contents: JSON.parse(data.contents) };
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateBlockApi = async (projectId, block) => {
    try {
        const { data } = await axios.put(
            `/api/block/${projectId}/${block.id}`,
            block,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const deleteBlockApi = async (block) => {
    try {
        const { data } = await axios.delete(`/api/block/${block.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
