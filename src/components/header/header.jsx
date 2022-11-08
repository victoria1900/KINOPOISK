import {AppBar, Button, Stack} from "@mui/material";
import React from 'react';
import {HeaderInner, HeaderLink} from "./styled";

const Header = () => {
    return (
        <AppBar position="static">
            <HeaderInner>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <HeaderLink to='/'>Home</HeaderLink>
                    <Button variant='contained' color='success'>Login</Button>
                </Stack>
            </HeaderInner>
        </AppBar>
    );
};

export default Header;
