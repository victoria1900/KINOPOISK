import React from 'react';
import {movieList} from "../../data/movie-list";
import {contentPerPage} from "../../pages/home/side-menu/pagination/custom-pagination";

export const paginate = (currentPage) => {
    const lastIndex = currentPage * contentPerPage;
    const firstIndex = lastIndex - contentPerPage;
    return movieList.slice(firstIndex, lastIndex);
};

