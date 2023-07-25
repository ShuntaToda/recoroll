export const getBlocksApi = async (projectId) => {
    try {
        const { data } = await axios.get(`/api/block/${projectId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(data);
        return data;
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
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
