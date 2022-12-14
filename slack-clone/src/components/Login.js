import React from "react";

import '../styles/login.css'; 

import { Button } from "@mui/material";

const Login = () => {
    return (
        <>
            <div className="login">
                <div className="login-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="Slack Logo" />
                    <h1>Sign in to Slack!</h1>
                    <p>Slack-Clone</p>
                    <Button>Sign in with Google</Button>
                </div>
            </div>
        </>
    );
}
 
export default Login;