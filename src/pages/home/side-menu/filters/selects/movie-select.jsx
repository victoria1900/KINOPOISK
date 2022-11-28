import React from 'react';
import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {SelectItem, SelectList} from "./styled";

const MovieSelect = () => {
    const dispatch = useDispatch();
    const selectMovie = useSelector(state => state.selectMovie);
    const getSelectedMovies = (event) => {
        dispatch({type: 'GET_SELECTED_MOVIE', payload: event.target.value});
    }
    return <FormControl fullWidth sx={{paddingTop: '20px'}}>
        <SelectList size='small'
                    labelId="demo-simple-select-label" value={selectMovie}
                    onChange={getSelectedMovies}>
            <SelectItem value={'watchLater'}>Смотреть позже</SelectItem>
            <SelectItem value={'favorites'}>Избранные</SelectItem>
        </SelectList>
    </FormControl>
};

export default MovieSelect;