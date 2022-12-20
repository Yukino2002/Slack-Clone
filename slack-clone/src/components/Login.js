import React from "react";

import '../styles/login.css';

import { Button } from "@mui/material";

import { auth, provider } from "../config/Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <>
            <div className="login">
                <div className="login-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="Slack Logo" />
                    <h1>Sign in to Slack!</h1>
                    <p>Slack-Clone</p>
                    <Button onClick={signIn}>Sign in with Google</Button>
                </div>
            </div>
        </>
    );
}

export default Login;