import React from 'react';
import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {MenuSubtitle, SelectItem, SelectList} from "./styled";

const MovieYearSelect = () => {
    const dispatch = useDispatch();
    const sortByDate = useSelector(state => state.sortByDate);
    const setDate = (event) => {
        dispatch({type: 'SORT_DATE', payload: event.target.value});
    }
    return <>
            <MenuSubtitle>Год релиза:</MenuSubtitle>
            <FormControl fullWidth>
                <SelectList size='small' value={sortByDate} onChange={setDate}
                            labelId="demo-simple-select-label" id="demo-simple-select">
                    <SelectItem value={'2020'}>2020</SelectItem>
                    <SelectItem value={'2019'}>2019</SelectItem>
                    <SelectItem value={'2018'}>2018</SelectItem>
                    <SelectItem value={'2017'}>2017</SelectItem>
                </SelectList>
            </FormControl>
        </>
};

export default MovieYearSelect;