import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BiMenu } from "react-icons/bi";

export const SideMenu = ({ isOpen, setIsOpen, white, children }) => {
    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <IconContext.Provider
                value={{ size: "40px", color: white ? "#fff" : "#444" }}
            >
                <div className="px-2" onClick={handleOpen}>
                    <BiMenu></BiMenu>
                </div>
            </IconContext.Provider>
            <div className="">
                <div
                    onClick={handleOpen}
                    className={`fixed ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }
                      ${isOpen ? "opacity-30" : "opacity-0"}
                      inset-0 w-screen h-screen bg-gray-700  transition-opacity`}
                ></div>
                <div
                    className={`absolute z-50 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } min-h-screen top-0 right-0 w-2/3 bg-white transition-transform flex flex-col`}
                >
                    {children}
                </div>
            </div>
        </>
    );
};
