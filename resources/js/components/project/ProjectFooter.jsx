import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPicture } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AddText } from "./AddText";
import TextMenu from "./TextMenu";
import { PhotoMenu } from "./PhotoMenu";
import { PhotoBtn } from "./PhotoBtn";
export const ProjectFooter = ({ selectedItem }) => {
    const [isOpenPhotoMenu, setIsOpenPhotoMenu] = useState(false);
    return (
        <div className="relative ">
            <div className="fixed flex justify-around items-center bottom-0  w-full m-0 h-16 bg-gradient-to-b to-gray-300 from-transparent">
                <IconContext.Provider value={{ size: "40px", color: "#444" }}>
                    <AddText></AddText>
                    <PhotoBtn
                        isOpenPhotoMenu={isOpenPhotoMenu}
                        setIsOpenPhotoMenu={setIsOpenPhotoMenu}
                    ></PhotoBtn>
                    <div className="flex">
                        <BsArrowLeftShort></BsArrowLeftShort>
                        <BsArrowRightShort></BsArrowRightShort>
                    </div>
                </IconContext.Provider>
            </div>
            <TextMenu selectedItem={selectedItem}></TextMenu>
            <PhotoMenu
                selectedItem={selectedItem}
                isOpenPhotoMenu={isOpenPhotoMenu}
                setIsOpenPhotoMenu={setIsOpenPhotoMenu}
            ></PhotoMenu>
        </div>
    );
};
