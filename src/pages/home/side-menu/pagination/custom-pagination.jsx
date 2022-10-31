import React, {useState} from 'react';
import {Button, ButtonGroup, Typography} from "@mui/material";
import {movieList} from "../../../../data/movie-list";
import {useDispatch, useSelector} from "react-redux";

export const contentPerPage = 6;

const CustomPagination = () => {
    const dispatch = useDispatch();
    const {currentPage} = useSelector(state => state);
    const totalPages = Math.ceil(movieList.length / contentPerPage);

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
                <Button variant='contained' color='primary' size='small' onClick={backPage} disabled={currentPage === 1}
                        sx={{width: '100%', marginRight: '5px'}}>Назад</Button>
                <Button variant='contained' color='primary' size='small' onClick={nextPage}
                        disabled={currentPage === totalPages}
                        sx={{width: '100%', marginLeft: '5px'}}>Вперед</Button>
            </ButtonGroup>
            <Typography sx={{
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'center'
            }}>{currentPage} of {totalPages}</Typography>
        </>
    );
};

export default CustomPagination;