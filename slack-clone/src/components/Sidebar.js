import React, { useEffect, useState } from 'react';

import '../styles/sidebar.css';

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import SidebarOption from './SidebarOption';
import db from '../config/Firebase';

const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) => (
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, []);

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-info">
                        <h2>
                            NITK
                        </h2>
                        <h3>
                            <FiberManualRecordIcon />
                            Pratik Jallan
                        </h3>
                    </div>
                    <CreateIcon />
                </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mention & Reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved Items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People and User groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr />
                <SidebarOption Icon={AddIcon} title="Add Channel" id={"addChannel"} channelOption="addChannel"/>
                {channels.map((channel) => (
                    <SidebarOption Icon={null} title={channel.name} id={channel.id} channelOption={null} />
                ))}
            </div>
        </>
    );
}

export default Sidebar;