import React, { useContext, useState } from "react";

import logo from "../../images/logos/logo-white.svg";
import { HiOutlineShare } from "react-icons/hi";
import { IconContext } from "react-icons";
import { SideMenu } from "./SideMenu";
import { userContext } from "../provider/user";
export const ProjectHeader = ({ project }) => {
    const user = useContext(userContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between items-center relative bg-gradient-to-br to-yellow-400 from-orange-400">
            <a href="/">
                <h1 className="py-2 px-3">
                    <img src={logo} className="w-28"></img>
                </h1>
            </a>

            <IconContext.Provider value={{ size: 30, color: "#ffffff" }}>
                <HiOutlineShare></HiOutlineShare>
            </IconContext.Provider>
            <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} white={true}>
                <header className="py-3 mt-3 border-b-2">
                    <h2 className="text-center font-bold text-lg">Menu</h2>
                </header>
                <div>
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
                </div>
                <div>{project.name}</div>
            </SideMenu>
        </div>
    );
};
