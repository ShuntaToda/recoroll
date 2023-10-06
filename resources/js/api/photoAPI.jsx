export const getPhotosAPI = async (projectId) => {
    try {
        const { data } = await axios.get(`/api/photo/${projectId}`, {
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
export const storePhoto = async (name) => {
    try {
        const { data } = await axios.post(
            "/api/project",
            { name: name },
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

export const getPhoto = async (id) => {
    try {
        const { data } = await axios.get(`/api/project/${id}`, {
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

export const deletePhoto = async (id) => {
    try {
        const { data } = await axios.delete(`/api/project/${id}`, {
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
