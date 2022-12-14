import React from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../config/Firebase';
import '../styles/sidebarOption.css';

const SidebarOption = ({ Icon, title, id, channelOption }) => {
    const navigate = useNavigate();

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            db.collection('channels').add({
                name: channelName,
            })
        }
    };

    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`);
        } else {
            navigate(title);
        }
    };

    return (
        <>
            <div className="sidebar-option" onClick={channelOption === "addChannel" ? addChannel : selectChannel}>
                {Icon && <Icon className="sidebar-option-icon" />}
                {Icon ? <h3>{title}</h3> : <h3 className="sidebar-option-channel"><span className="sidebar-option-hash">#</span> {title}</h3>}
            </div>
        </>
    );
}

export default SidebarOption;