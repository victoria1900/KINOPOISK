import React from 'react';
import Header from "../components/header";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

const Layout = () => {
    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;