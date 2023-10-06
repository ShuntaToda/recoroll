import React from "react";

const Photos = ({ photos }) => {
    return (
        <div>
            <h2>画像一覧</h2>
            <div className="flex justify-around">
                {photos.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => console.log(item)}
                        className="w-1/2 p-3"
                    >
                        <img src={item.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;
