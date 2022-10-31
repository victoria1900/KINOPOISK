import React, {useState} from 'react';
import {Grid} from "@mui/material";
import MovieCard from "./movie-card/movie-card";
import {useSelector} from "react-redux";
import {paginate} from "../../../core/utils/paginate";

const MovieList = () => {
    const {currentPage} = useSelector(state => state);
    const movies = paginate(currentPage);

    return (
        <Grid container spacing={5}>
            {movies.map(movie =>
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </Grid>
    );
};

export default MovieList;