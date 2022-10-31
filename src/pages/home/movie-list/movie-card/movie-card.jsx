import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, IconButton, Button} from "@mui/material";
import {IMAGE_URL} from "../../../../core/const/config";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const MovieCard = ({movie}) => {
    return <Grid item md={6}>
        <Card>
            <Grid container>
                <Grid item md={6}>
                    <CardMedia component='img' image={IMAGE_URL + movie.poster_path} height='250'/>
                </Grid>
                <Grid item md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <CardContent>
                        <Box sx={{display: 'flex'}}>
                            <Typography>Рейтинг: {movie.vote_average}</Typography>
                            <Box sx={{display: 'flex'}}>
                                <IconButton sx={{paddingTop: '0px', paddingBottom: '0px'}} variant="plain">
                                    <FavoriteBorder/>
                                </IconButton>
                                <IconButton sx={{paddingTop: '0px', paddingBottom: '0px'}} variant="plain">
                                    <FavoriteBorder/>
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography sx={{paddingTop: '15px'}}>{movie.title}</Typography>
                    </CardContent>
                    <CardActions sx={{borderTop: '1px solid #CFCFCF', padding: '0px'}}>
                        <Button to='/' style={{
                            color: 'black',
                            textDecoration: 'none',
                            padding: '10px',
                            width: '100%',
                            borderRadius: 'inherit'
                        }}>Подробнее</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    </Grid>
};

export default MovieCard;