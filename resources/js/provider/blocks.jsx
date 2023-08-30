import { createContext, useState } from "react";

export const blocksContext = createContext({});
export const setBlocksContext = createContext(() => undefined);

export const BlocksProvider = ({ children }) => {
    const [blocks, setBlocks] = useState([]);

    return (
        <blocksContext.Provider value={blocks}>
            <setBlocksContext.Provider value={setBlocks}>
                {children}
            </setBlocksContext.Provider>
        </blocksContext.Provider>
    );
};
