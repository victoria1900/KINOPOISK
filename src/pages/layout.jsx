import React from 'react';
import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";

const Layout = () => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;