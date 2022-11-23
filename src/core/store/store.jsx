import {combineReducers, createStore} from "redux";
import React from 'react';
import {movieListData} from "../data/movie-list-data";

const defaultState = {
    currentPage: 1
};

const defaultIsAuthorized = Boolean(localStorage.getItem('isAuthorized'));

const flipPages = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT':
            return {...state, currentPage: action.payload + 1};
        case 'BACK':
            return {...state, currentPage: action.payload - 1};
        default:
            return state;
    }
};

const sortByDate = (state = '2020', action) => {
    switch (action.type) {
        case 'SORT_DATE':
            return action.payload;
        default:
            return state;
    }
}

const sortByPopularity = (state = 'POPULARITY_DOWN', action) => {
    switch (action.type) {
        case 'SORT_BY_POPULARITY':
            return action.payload;
        default:
            return state;
    }
};

const sortByGenre = (state = [], action) => {
    switch (action.type) {
        case 'SORT_BY_GENRE':
            if (state.includes(action.payload)) {
                return state.filter(item => item !== action.payload);
            }
            return [...state, action.payload];
        case 'RESET_GENRES':
            return state;
        default:
            return state;
    }
}


const moviesLength = (state = movieListData, action) => {
    switch (action.type) {
        case 'GET_MOVIES_LENGTH':
            return action.payload;
        default:
            return state;
    }
}

const toggleModal = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return action.payload;
        default:
            return state;
    }
}
const isAuthorized = (state = defaultIsAuthorized, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        default:
            return state;
    }
}

const listFavoriteMovies = (state= [], action)=>{
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }
}

const listWatchLater = (state=[], action)=>{
    switch (action.type){
        case 'ADD_TO_WATCH_LATER':
            return [...state, action.payload];
        default:
            return state;
    }
}

const reducer = combineReducers({
    flipPages,
    sortByDate,
    sortByPopularity,
    sortByGenre,
    moviesLength,
    toggleModal,
    isAuthorized,
    listFavoriteMovies,
    listWatchLater
})

export const store = createStore(reducer);