import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {useDispatch} from "react-redux";

const GenreItem = ({checkbox}) => {
    const dispatch = useDispatch();
    const handleChange = (id) => {
        dispatch({type: 'SORT_BY_GENRE', payload: id});
    }

    return (
        <FormControlLabel
            id={checkbox.id}
            control={<Checkbox onChange={() => handleChange(checkbox.id)}/>}
            label={checkbox.name}/>
    );
};

export default GenreItem;