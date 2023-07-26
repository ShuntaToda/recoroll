import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
    return (
        <div className="my-5">
            <div className="h-40 w-40 border"></div>
            <div>{project.name}</div>
        </div>
    );
};
