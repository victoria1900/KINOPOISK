import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {IMAGE_URL} from "../../../../core/const/config";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {ButtonDetail, CardBox, CardButton, CardDesc, DetailContainer, MovieTitle} from "./styled";

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
                            <CardBox>
                                <CardButton variant="plain">
                                    <FavoriteBorder/>
                                </CardButton>
                                <CardButton variant="plain">
                                    <FavoriteBorder/>
                                </CardButton>
                            </CardBox>
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