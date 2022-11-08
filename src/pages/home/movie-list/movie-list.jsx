import React from 'react';
import {Grid} from "@mui/material";
import MovieCard from "./movie-card/movie-card";
import {useSelector} from "react-redux";
import {paginate} from "../../../core/utils/paginate";

const MovieList = () => {
    const {currentPage} = useSelector(state => state.pages);
    const moviesList = useSelector(state=> state.movies);

    return (
        <Grid container spacing={5}>
            {paginate(currentPage, moviesList).map(movie =>
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </Grid>
    );
};

export default MovieList;