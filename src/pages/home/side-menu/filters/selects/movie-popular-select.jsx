import React from 'react';
import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {MenuSubtitle, SelectItem, SelectList} from "./styled";
import {SORT} from "../../../../../core/const/config";

const MoviePopularSelect = () => {
    const dispatch = useDispatch();
    const sortByPopularity = useSelector(state => state.sortByPopularity);
    const setPopularity = (event) => {
        dispatch({type: 'SORT_BY_POPULARITY', payload: event.target.value});
    }
    return <>
            <MenuSubtitle>Сортировать по:</MenuSubtitle>
            <FormControl fullWidth>
                <SelectList size='small' value={sortByPopularity} onChange={setPopularity}
                            labelId="demo-simple-select-label" id="demo-simple-select">
                    <SelectItem value={SORT.POPULAR_DOWN}>Популярные по убыванию</SelectItem>
                    <SelectItem value={SORT.POPULAR_UP}>Популярные по возрастанию </SelectItem>
                    <SelectItem value={SORT.RATING_DOWN}>Рейтинг по убыванию</SelectItem>
                    <SelectItem value={SORT.RATING_UP}>Рейтинг по возрастанию</SelectItem>
                </SelectList>
            </FormControl>
        </>
};

export default MoviePopularSelect;