export const getProjects = async () => {
    try {
        const { data } = await axios.get("/api/project", {
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
export const storeProject = async (name) => {
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

export const getProject = async (id) => {
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

export const deleteProject = async (id) => {
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
