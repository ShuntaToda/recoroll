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
