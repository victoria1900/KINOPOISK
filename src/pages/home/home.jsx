import React from 'react';
import SideMenu from "./side-menu/side-menu";
import {Grid} from "@mui/material";
import MovieList from "./movie-list/movie-list";

const Home = () => {
    return (
        <Grid container spacing={10} sx={{paddingTop: '30px'}}>
            <Grid item md={3}>
                <SideMenu/>
            </Grid>
            <Grid item md={9}>
                <MovieList/>
            </Grid>
        </Grid>
    );
};

export default Home;