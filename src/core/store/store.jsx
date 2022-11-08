import {combineReducers, createStore} from "redux";
import React from 'react';
import {movieList} from "../../data/movie-list";

const defaultState = {
    currentPage: 1
};

const pages = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT':
            return {...state, currentPage: action.payload + 1};
        case 'BACK':
            return {...state, currentPage: action.payload - 1};
        default:
            return state;
    }
};

const movies = (state = movieList) => {
    return state;
}


const reducer = combineReducers({
    pages,
    movies,
})

export const store = createStore(reducer);