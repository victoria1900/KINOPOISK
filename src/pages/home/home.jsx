import React from 'react';
import SideMenu from "./side-menu/side-menu";
import {Grid} from "@mui/material";
import MovieList from "./movie-list/movie-list";
import {HomeContainer} from "./styled";

const Home = () => {
    return <HomeContainer container spacing={10}>
        <Grid item md={3}>
            <SideMenu/>
        </Grid>
        <Grid item md={9}>
            <MovieList/>
        </Grid>
    </HomeContainer>
};

export default Home;