import React, { useContext, useEffect, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { getPhotosAPI } from "../../api/photoAPI";
import { projectContext } from "../../provider/project";
import Photos from "./Photos";
import { AddPhoto } from "./AddPhoto";

export const PhotoMenu = ({
    selectedItem,
    isOpenPhotoMenu,
    setIsOpenPhotoMenu,
}) => {
    const project = useContext(projectContext);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getPhotos = async () => {
            const gotPhotos = await getPhotosAPI(project.id);
            setPhotos(gotPhotos);
            return gotPhotos;
        };
        if (isOpenPhotoMenu) {
            getPhotos();
        }
    }, [isOpenPhotoMenu]);

    useEffect(() => {
        console.log(photos);
    }, [photos]);

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
                <Photos photos={photos}></Photos>
                <AddPhoto setPhotos={setPhotos}></AddPhoto>
            </div>
        </div>
    );
};
