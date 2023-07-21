import React from "react";
import { MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";

export const CreateProject = () => {
    return (
        <div className="bg-gradient-to-br from-yellow-300 to-orange-400 h-40 flex flex-col justify-center items-center">
            <h2 className="text-center text-white text-2xl font-bold">
                Create Project
            </h2>
            <IconContext.Provider value={{ size: 40, color: "#bbb" }}>
                <div
                    className="h-16 w-60 bg-white mt-5 rounded-lg flex justify-center items-center"
                    onClick={() => {
                        console.log("create");
                    }}
                >
                    <MdAdd />
                </div>
            </IconContext.Provider>
        </div>
    );
};
