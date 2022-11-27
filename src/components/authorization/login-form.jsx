import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import {DEFAULT_USER_NAME, DEFAULT_USER_PASSWORD} from "../../core/const/config";
import {useDispatch} from "react-redux";

const LoginForm = ({closeModal}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const isAuthorizedUser = login === DEFAULT_USER_NAME && password === DEFAULT_USER_PASSWORD;
    const dispatch = useDispatch();

    const submitHandler = () => {
        if (isAuthorizedUser) {
            closeModal();
            dispatch({type: 'LOGIN', payload: true});
            localStorage.setItem('isAuthorized', String(true));
        } else {
            alert('wrong user name or password!');
        }
    }

    return (
        <>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Login"
                    type="text"
                    value={login}
                    onChange={event => setLogin(event.target.value)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">
                    Cancel
                </Button>
                <Button onClick={submitHandler} color="primary">
                    Login
                </Button>
            </DialogActions>
        </>
    );
};

export default LoginForm;