import React from "react";

import { PiTextTBold } from "react-icons/pi";
export const AddText = () => {
    const addText = () => {
        console.log("text");
    };
    return (
        <div onClick={addText}>
            <PiTextTBold></PiTextTBold>
        </div>
    );
};
