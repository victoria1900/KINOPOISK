import {createStore} from "redux";
import React from 'react';

const defaultState = {
    currentPage: 1
};

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case 'NEXT':
            return {...state, currentPage: action.payload + 1};
        case 'BACK':
            return {...state, currentPage: action.payload - 1};
        default:
            return state;
    }
};


export const store = createStore(reducer);