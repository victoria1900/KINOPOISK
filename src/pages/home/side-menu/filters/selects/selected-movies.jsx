import {FormControl} from "@mui/material";
import {SelectItem, SelectList} from "../../styled";
import React, {useState} from "react";

export const SelectedMovies = () => {
    const [favoriteMovieList, setFavoriteMovieList] = useState('');

    return <FormControl fullWidth sx={{paddingTop: '20px'}}>
        <SelectList size='small'
                    labelId="demo-simple-select-label" value={favoriteMovieList}
                    onChange={event => setFavoriteMovieList(event.target.value)} id="demo-simple-select">
            <SelectItem value={'watchLater'}>Смотреть позже</SelectItem>
            <SelectItem value={'favorites'}>Избранные</SelectItem>
        </SelectList>
    </FormControl>
}