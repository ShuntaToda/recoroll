import React, { useEffect, useState } from "react";
import { AiFillPicture } from "react-icons/ai";

export const PhotoMenu = ({
    selectedItem,
    isOpenPhotoMenu,
    setIsOpenPhotoMenu,
}) => {
    useEffect(() => {
        console.log(isOpenPhotoMenu);
    }, [isOpenPhotoMenu]);
    return (
        <div>
            {isOpenPhotoMenu && (
                <div
                    onClick={() => setIsOpenPhotoMenu(false)}
                    className="w-full h-full bg-black opacity-20 transition-opacity fixed top-0 left-0"
                ></div>
            )}
            <div
                className={`w-full h-3/4 fixed bottom-0 bg-white transition-transform ${
                    !isOpenPhotoMenu ? "translate-y-full" : "translate-y-0"
                }`}
            >
                <div onClick={() => setIsOpenPhotoMenu(false)}>X</div>
            </div>
        </div>
    );
};
