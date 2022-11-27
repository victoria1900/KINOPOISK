import React from 'react';
import {FormControl} from "@mui/material";
import GenreList from "./filters/genres/genre-list";
import CustomPagination from "./pagination/custom-pagination";
import {FiltersTitle, ResetFilters, SelectItem, SideMenuInner, MenuSubtitle, SelectList} from "./styled";
import {useDispatch, useSelector} from "react-redux";

const SideMenu = () => {
    const dispatch = useDispatch();
    const sortByDate = useSelector(state => state.sortByDate);
    const sortByPopularity = useSelector(state => state.sortByPopularity);
    const sortGenre = useSelector(state => state.sortByGenre);
    const isAuthorized = useSelector(state => state.isAuthorized);
    const selectMovie = useSelector(state=>state.selectMovie);

    const setDate = (event) => {
        dispatch({type: 'SORT_DATE', payload: event.target.value});
    }

    const setPopularity = (event) => {
        dispatch({type: 'SORT_BY_POPULARITY', payload: event.target.value});
    }
    const resetFilters = () => {
        if (sortByDate !== '2020' || sortByPopularity !== 'POPULARITY_DOWN' || sortGenre.length !== 0) {
            dispatch({type: 'SORT_DATE', payload: '2020'});
            dispatch({type: 'SORT_BY_POPULARITY', payload: 'POPULARITY_DOWN'});
            dispatch({type: 'RESET_GENRES'});
        }
    }
    const getSelectedMovies = (event) => {
        dispatch({type: 'GET_SELECTED_MOVIE', payload: event.target.value});
    }

    return (
        <SideMenuInner>
            <FiltersTitle>Фильтры:</FiltersTitle>
            <ResetFilters variant='contained' color='primary' size='small' onClick={resetFilters}>Сбросить все
                фильтры</ResetFilters>
            <MenuSubtitle>Сортировать по:</MenuSubtitle>
            <FormControl fullWidth>
                <SelectList size='small' value={sortByPopularity} onChange={setPopularity}
                            labelId="demo-simple-select-label" id="demo-simple-select">
                    <SelectItem value={'POPULARITY_DOWN'}>Популярные по убыванию</SelectItem>
                    <SelectItem value={'POPULARITY_UP'}>Популярные по возрастанию </SelectItem>
                    <SelectItem value={'RATING_DOWN'}>Рейтинг по убыванию</SelectItem>
                    <SelectItem value={'RATING_UP'}>Рейтинг по возрастанию</SelectItem>
                </SelectList>
            </FormControl>
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
            {isAuthorized ?
                <FormControl fullWidth sx={{paddingTop: '20px'}}>
                    <SelectList size='small'
                                labelId="demo-simple-select-label" value={selectMovie}
                                onChange={getSelectedMovies}>
                        <SelectItem value={'watchLater'}>Смотреть позже</SelectItem>
                        <SelectItem value={'favorites'}>Избранные</SelectItem>
                    </SelectList>
                </FormControl>
                : ''}
            <GenreList/>
            <CustomPagination/>
        </SideMenuInner>
    );
};

export default SideMenu;