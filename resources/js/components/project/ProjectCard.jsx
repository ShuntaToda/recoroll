import React from "react";
import { Link } from "react-router-dom";
import { deleteProject } from "../../api/projectAPI";

export const ProjectCard = ({ project, updateProject }) => {
    const destroy = async () => {
        await deleteProject(project.id);
        await updateProject();
    };
    return (
        <div className="my-5">
            <Link to={`project/${project.id}`} state={{ project: project }}>
                <div className="h-40 w-40 border"></div>
            </Link>
            <div>{project.name}</div>
            <div className="text-red-500 font-bold" onClick={destroy}>
                x
            </div>
        </div>
    );
};
