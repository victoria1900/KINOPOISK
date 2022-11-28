import React from 'react';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {CardBox} from "../styled";
import {useDispatch, useSelector} from "react-redux";

const CardIcons = ({movie}) => {
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.isAuthorized);
    const listFavoriteMovies = useSelector(state => state.listFavoriteMovies);
    const listWatchLater = useSelector(state => state.listWatchLater);

    const handleMovie = () => {
        if (!isAuthorized) {
            dispatch({type: 'TOGGLE_MODAL', payload: true});
        }
    }

    const addToFavorite = () => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: movie.id});
        localStorage.setItem('listFavoriteMovies', JSON.stringify(listFavoriteMovies));
    }

    const addToWatchLater = () => {
        dispatch({type: 'ADD_TO_WATCH_LATER', payload: movie.id});
        localStorage.setItem('listWatchLater', JSON.stringify(listWatchLater));
    }

    return (
        <CardBox>
            <Checkbox onChange={addToFavorite}
                      {...label}
                      icon={<FavoriteBorder/>}
                      checkedIcon={<Favorite/>}
                      onClick={handleMovie}/>
            <Checkbox onChange={addToWatchLater}
                      {...label}
                      icon={<BookmarkBorderIcon/>}
                      checkedIcon={<BookmarkIcon/>}
                      onClick={handleMovie}
            />
        </CardBox>
    );
};

export default CardIcons;