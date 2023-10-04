import React from "react";
import { AiFillPicture } from "react-icons/ai";

export const PhotoBtn = ({ isOpenPhotoMenu, setIsOpenPhotoMenu }) => {
    const openMenu = () => {
        setIsOpenPhotoMenu(!isOpenPhotoMenu);
    };
    return (
        <div onClick={openMenu}>
            <AiFillPicture></AiFillPicture>
        </div>
    );
};
