import React, { useContext, useEffect, useState } from "react";
import { updateBlockApi } from "../../api/blockAPI";
import { blocksContext, setBlocksContext } from "../../provider/blocks";
import { HuePicker, SketchPicker } from "react-color";

const TextMenu = ({ selectedItem }) => {
    const blocks = useContext(blocksContext);
    const setBlocks = useContext(setBlocksContext);
    const [isOpenColor, setIsOpenColor] = useState(false);

    const updateBlock = async () => {
        const gotBlock = await updateBlockApi(
            blocks[selectedItem.blockIndex],
            "text",
            [...blocks[selectedItem.blockIndex].contents.texts]
        );
    };

    const upFontSize = () => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].fontSize += 2;
            return [...prevBlocks];
        });
        updateBlock();
    };
    const downFontSize = () => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].fontSize -= 2;
            return [...prevBlocks];
        });
        updateBlock();
    };
    const upRotate = () => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].rotate += 4;
            return [...prevBlocks];
        });
        updateBlock();
    };
    const downRotate = () => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].rotate -= 4;
            return [...prevBlocks];
        });
        updateBlock();
    };

    const changeBold = () => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].isBold =
                !prevBlocks[selectedItem.blockIndex].contents.texts[
                    selectedItem.index
                ].isBold;
            return [...prevBlocks];
        });
        updateBlock();
    };

    const handleChangeColor = (color, e) => {
        setBlocks((prevBlocks) => {
            prevBlocks[selectedItem.blockIndex].contents.texts[
                selectedItem.index
            ].color = color.hex;
            return [...prevBlocks];
        });
    };

    useEffect(() => {
        if (selectedItem.mode == "") {
            setIsOpenColor(false);
        }
    }, [selectedItem]);

    return (
        <div
            className={`w-full h-16 fixed bottom-0 transition-transform  bg-white ${
                selectedItem.mode == "" ? "translate-y-16" : "translate-y-0"
            } `}
        >
            <div
                className={`z-50 absolute w-full h-full flex justify-around items-center bg-white`}
            >
                <div className="flex justify-around">
                    <div onClick={upFontSize}>+</div>
                    <div onClick={downFontSize}>-</div>
                </div>
                <div className="flex justify-around">
                    <div onClick={upRotate}>+</div>
                    <div onClick={downRotate}>-</div>
                </div>

                <div
                    onClick={() =>
                        setIsOpenColor((prevOpenColor) => !prevOpenColor)
                    }
                >
                    color
                </div>
                <div onClick={changeBold}>bold</div>
            </div>
            <div
                className={`absolute w-full h-14 flex items-center justify-center -top-14 bg-white transition-transform ${
                    !isOpenColor && "translate-y-14"
                } `}
            >
                {selectedItem.mode == "text" && (
                    <HuePicker
                        color={
                            blocks[selectedItem.blockIndex].contents.texts[
                                selectedItem.index
                            ].color
                        }
                        onChangeComplete={handleChangeColor}
                    ></HuePicker>
                )}
            </div>
        </div>
    );
};

export default TextMenu;
