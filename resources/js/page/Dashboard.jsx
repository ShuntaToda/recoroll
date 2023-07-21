import React, { useContext, useEffect, useState } from "react";
import { setUserContext, userContext } from "../provider/user";
import { Navigate, useNavigate } from "react-router-dom";

import logo from "../../images/logos/logo.svg";
import { SideMenu } from "../components/SideMenu";
import { Logout } from "../components/Logout";
import { CreateProject } from "../components/CreateProject";
import { ProjectCard } from "../components/ProjectCard";
import { getProjects } from "../api/projectAPI";

export const DashboardPage = () => {
    const user = useContext(userContext);
    const [isOpen, setIsOpen] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const get = async () => {
            const gotProjects = await getProjects();
            setProjects(gotProjects);
            console.log(gotProjects);
        };
        get();
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center relative">
                <a href="/">
                    <h1 className="py-4 px-6">
                        <img src={logo} className="w-52"></img>
                    </h1>
                </a>
                <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}>
                    <header className="py-3 mt-3 border-b-2">
                        <h2 className="text-center font-bold text-lg">Menu</h2>
                    </header>
                    <div className="flex mt-5 px-2 grow">
                        <img
                            src={user.avatar}
                            alt=""
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="pl-3">
                            <div>{user.name}</div>
                            <div className="text-sm">{user.email}</div>
                        </div>
                    </div>
                    <footer className="py-3 flex justify-center items-center border-t-2">
                        <Logout />
                    </footer>
                </SideMenu>
            </div>
            <CreateProject></CreateProject>
            <main className="pt-10 flex flex-wrap justify-around">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>
                ))}
            </main>
        </div>
    );
};
