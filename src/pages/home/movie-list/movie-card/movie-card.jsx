import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {IMAGE_URL} from "../../../../core/const/config";
import {ButtonDetail, CardBox, CardDesc, DetailContainer, MovieTitle} from "./styled";
import CardIcons from "../../../../core/utils/card-icons";

const MovieCard = ({movie}) => {
    return <Grid item md={6}>
        <Card>
            <Grid container>
                <Grid item md={6}>
                    <CardMedia component='img' image={IMAGE_URL + movie.poster_path} height='250'/>
                </Grid>
                <CardDesc item md={6}>
                    <CardContent>
                        <CardBox>
                            <Typography>Рейтинг: {movie.vote_average}</Typography>
                            <CardIcons movie={movie}/>
                        </CardBox>
                        <MovieTitle>{movie.title}</MovieTitle>
                    </CardContent>
                    <DetailContainer>
                        <ButtonDetail to='/'>Подробнее</ButtonDetail>
                    </DetailContainer>
                </CardDesc>
            </Grid>
        </Card>
    </Grid>
};

export default MovieCard;