import React from 'react';
import GenreList from "./filters/genres/genre-list";
import CustomPagination from "./pagination/custom-pagination";
import {FiltersTitle, SideMenuInner} from "./styled";
import {useSelector} from "react-redux";
import MovieSelect from "./filters/selects/movie-select";
import MovieYearSelect from "./filters/selects/movie-year-select";
import MoviePopularSelect from "./filters/selects/movie-popular-select";
import ResetMovieFilters from "./filters/reset/reset-movie-filters";

const SideMenu = () => {
    const isAuthorized = useSelector(state => state.isAuthorized);
    return (
        <SideMenuInner>
            <FiltersTitle>Фильтры:</FiltersTitle>
            <ResetMovieFilters/>
            <MoviePopularSelect/>
            <MovieYearSelect/>
            {isAuthorized ? <MovieSelect/> : ''}
            <GenreList/>
            <CustomPagination/>
        </SideMenuInner>
    );
};

export default SideMenu;