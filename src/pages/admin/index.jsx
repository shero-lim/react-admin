import React, { Component } from "react";
import memoryUtils from "../../utils/memoryUtils";
import { Navigate } from "react-router-dom"

const Admin = () => {
    const user = memoryUtils.user;

    if (!user || !user._id) {
        return <Navigate to="/login"></Navigate>
    }

    return (
        <div>Hello Admin</div>
    )
}

export default Admin