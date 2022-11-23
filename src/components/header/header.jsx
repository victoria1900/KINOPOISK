import {AppBar, Button, Stack} from "@mui/material";
import React, {useState} from 'react';
import {HeaderInner, HeaderLink} from "./styled";
import LoginModal from "../authorization/login-modal";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.isAuthorized);

    const toggleModal = () => {
        if (isAuthorized) {
            localStorage.clear();
            dispatch({type: 'LOGIN', payload: false});
        } else {
            dispatch({type: 'TOGGLE_MODAL', payload: true});
        }
    }

    return (
        <AppBar position="static">
            <HeaderInner>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <HeaderLink to='/'>Home</HeaderLink>
                    <Button variant='contained' color='success'
                            onClick={toggleModal}>{isAuthorized ? 'Logout' : 'Login'}</Button>
                    <LoginModal/>
                </Stack>
            </HeaderInner>
        </AppBar>
    );
};

export default Header;
