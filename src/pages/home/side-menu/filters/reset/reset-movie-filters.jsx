import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ResetFilters} from "./styled";
import {SORT} from "../../../../../core/const/config";

const ResetMovieFilters = () => {
    const dispatch = useDispatch();
    const sortByDate = useSelector(state => state.sortByDate);
    const sortByPopularity = useSelector(state => state.sortByPopularity);
    const sortGenre = useSelector(state => state.sortByGenre);
    const resetFilters = () => {
        if (sortByDate !== '2020' || sortByPopularity !== SORT.POPULAR_DOWN || sortGenre.length !== 0) {
            dispatch({type: 'SORT_DATE', payload: '2020'});
            dispatch({type: 'SORT_BY_POPULARITY', payload: SORT.POPULAR_DOWN});
            dispatch({type: 'RESET_GENRES'});
        }
    }

    return <ResetFilters variant='contained' color='primary' size='small' onClick={resetFilters}>Сбросить все
        фильтры</ResetFilters>;
};

export default ResetMovieFilters;