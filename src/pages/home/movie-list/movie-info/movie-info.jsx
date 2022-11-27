import React from 'react';
import {useParams} from "react-router-dom";
import {Button, CardMedia, Grid, Typography} from "@mui/material";
import {movieListData} from "../../../../core/data/movie-list-data";
import {IMAGE_URL} from "../../../../core/const/config";
import MovieInfoTabs from "./movie-info-tabs/movie-info-tabs";
import {ButtonBack, MovieDescription} from "./styled";

const MovieInfo = () => {
    const {id} = useParams();
    const currentMovie = movieListData.find(movie => movie.id === Number(id));

    return (
        <>
            <ButtonBack to={'/'}>
                <Button variant="text"> ← Back</Button>
            </ButtonBack>
            <MovieDescription container spacing={8}>
                <Grid item md={5}>
                    <CardMedia component='img' image={IMAGE_URL + currentMovie.backdrop_path} height='250'/>
                </Grid>
                <Grid item md={7}>
                    <Typography>Рейтинг: {currentMovie.vote_average}</Typography>
                    <Typography>{currentMovie.overview}</Typography>
                </Grid>
            </MovieDescription>
            <MovieInfoTabs currentMovie={currentMovie}/>
        </>

    );
};

export default MovieInfo;