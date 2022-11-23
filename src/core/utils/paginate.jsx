import React from 'react';
import {contentPerPage} from "../../pages/home/side-menu/pagination/custom-pagination";

export const paginate = (currentPage, moviesList, dispatch) => {
    dispatch({type: 'GET_MOVIES_LENGTH', payload: moviesList});
    const lastIndex = currentPage * contentPerPage;
    const firstIndex = lastIndex - contentPerPage;
    return moviesList.slice(firstIndex, lastIndex);
};