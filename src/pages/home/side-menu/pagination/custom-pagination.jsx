import React from 'react';
import {ButtonGroup} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ButtonPaginate, PagesPaginate} from "./styled";

export const contentPerPage = 10;
const CustomPagination = () => {
    const dispatch = useDispatch();
    const {currentPage} = useSelector(state => state.flipPages);
    const moviesLength = useSelector(state => state.moviesLength);
    const totalPages = Math.ceil(moviesLength.length / contentPerPage);

    function nextPage() {
        if (currentPage < totalPages) {
            dispatch({type: 'NEXT', payload: currentPage});
        }
    }

    function backPage() {
        if (currentPage > 1) {
            dispatch({type: 'BACK', payload: currentPage});
        }
    }

    return (
        <>
            <ButtonGroup>
                <ButtonPaginate variant='contained' color='primary' size='small' onClick={backPage}
                                disabled={currentPage === 1}>Назад</ButtonPaginate>
                <ButtonPaginate variant='contained' color='primary' size='small' onClick={nextPage}
                                disabled={currentPage === totalPages}>Вперед</ButtonPaginate>
            </ButtonGroup>
            <PagesPaginate>{currentPage} of {totalPages}</PagesPaginate>
        </>
    );
};

export default CustomPagination;