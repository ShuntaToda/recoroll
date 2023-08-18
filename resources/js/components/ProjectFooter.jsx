import React from "react";
import { IconContext } from "react-icons";
import { PiTextTBold } from "react-icons/pi";
import { AiFillPicture } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
export const ProjectFooter = () => {
    return (
        <div className="fixed flex justify-around items-center bottom-0  w-full m-0 h-16 bg-gradient-to-b to-gray-300 from-transparent">
            <IconContext.Provider value={{ size: "40px", color: "#444" }}>
                <div>
                    <PiTextTBold></PiTextTBold>
                </div>
                <div>
                    <AiFillPicture></AiFillPicture>
                </div>
                <div className="flex">
                    <BsArrowLeftShort></BsArrowLeftShort>
                    <BsArrowRightShort></BsArrowRightShort>
                </div>
            </IconContext.Provider>
        </div>
    );
};
