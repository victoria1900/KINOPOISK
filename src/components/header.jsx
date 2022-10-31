import Toolbar from "@mui/material/Toolbar";
import {AppBar, Button, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{display: 'grid'}}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                    <Button variant='contained' color='success'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
