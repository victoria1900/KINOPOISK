import React from 'react';
import {contentPerPage} from "../../pages/home/side-menu/pagination/custom-pagination";

export const paginate = (currentPage, moviesList) => {
    const lastIndex = currentPage * contentPerPage;
    const firstIndex = lastIndex - contentPerPage;
    return moviesList.slice(firstIndex, lastIndex);
};

