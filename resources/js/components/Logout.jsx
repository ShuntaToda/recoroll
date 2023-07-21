import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setUserContext } from "../provider/user";

export const Logout = () => {
    const setUser = useContext(setUserContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setUser({});
        navigate("/login");
    };

    return (
        <>
            <button
                onClick={logout}
                className="btn btn-sm btn-error text-white"
            >
                Logout
            </button>
        </>
    );
};
