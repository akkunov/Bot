import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useUser} from "../hooks/useUser.js";
import Category from "../components/category.jsx";
import Menu from "../components/menu.jsx";

function Admin(props) {
    const {user, isAuth} = useUser()
    const navigate = useNavigate()

    useEffect(() => {

        if(!isAuth){
            navigate('/admin/sign-in')
        }

    },[user.email])
    if(!isAuth){
        return <>dev</>
    }

    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
}

export default Admin;