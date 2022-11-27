import React from 'react';
import {Card, CardMedia, Grid} from "@mui/material";
import {IMAGE_URL} from "../../../../core/const/config";
import CardInfo from "./card-info/card-info";

const MovieCard = ({movie}) => {
    return <Grid item md={6}>
        <Card>
            <Grid container>
                <Grid item md={6}>
                    <CardMedia component='img' image={IMAGE_URL + movie.poster_path} height='250'/>
                </Grid>
                <CardInfo movie={movie}/>
            </Grid>
        </Card>
    </Grid>
};

export default MovieCard;