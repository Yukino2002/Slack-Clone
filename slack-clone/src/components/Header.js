import React from 'react';

import '../styles/header.css';

import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <Avatar className="header_avatar" alt="Pratik" src="" />
                    <AccessTimeIcon />
                </div>
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Channels" />
                </div>
                <div className="header-right">
                    <HelpOutIcon />
                </div>
            </div>
        </>
    );
}

export default Header;