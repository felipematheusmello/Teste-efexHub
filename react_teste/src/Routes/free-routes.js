import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function FreeRoutes() {
    const auth = localStorage.getItem('access_token');

    return auth? <Navigate to="/home" />: <Outlet />
}

export default FreeRoutes;