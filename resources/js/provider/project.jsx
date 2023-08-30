import { createContext, useState } from "react";

export const projectContext = createContext({});
export const setProjectContext = createContext(() => undefined);

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState({});

    return (
        <projectContext.Provider value={project}>
            <setProjectContext.Provider value={setProject}>
                {children}
            </setProjectContext.Provider>
        </projectContext.Provider>
    );
};
