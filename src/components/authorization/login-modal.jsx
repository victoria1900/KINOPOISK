import React from 'react';
import {Dialog} from "@mui/material";
import LoginForm from "./login-form";
import {useDispatch, useSelector} from "react-redux";

const LoginModal = () => {
    const toggleModal = useSelector(state => state.toggleModal);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: 'TOGGLE_MODAL', payload: false});
    }
    return (
        <Dialog open={toggleModal} onClose={closeModal} aria-labelledby="form-dialog-title">
            <LoginForm/>
        </Dialog>
    );
};

export default LoginModal;