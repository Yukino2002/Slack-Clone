import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Message from "./Message";
import db from "../config/Firebase";
import '../styles/chat.css';
import ChatInput from "./ChatInput";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const Chat = () => {
    const { channelId } = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    const [channelMessages, setChannelMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .onSnapshot((snapshot) => (
                    setChannelDetails(
                        snapshot.data()
                    )
                ))

            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => (
                    setChannelMessages(
                        snapshot.docs.map((doc) => (
                            doc.data()
                        ))
                    )
                ))

        }
    }, [channelId]);

    return (
        <>
            <div className="chat">
                <div className="chat-header">
                    <div className="chat-header-left">
                        <h4 className="chat-channel-name">
                            <strong>#{channelDetails?.name}</strong>
                            <StarBorderOutlinedIcon />
                        </h4>
                    </div>
                    <div className="chat-header-right">
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </div>
                </div>
                <div className="chat-messages">
                    {channelMessages.map(({message, user, userImage, timestamp}, index) => (
                        <Message message={message} user={user} userImage={userImage} timestamp={timestamp} key={index} />
                    ))}
                </div>
                <ChatInput channelName={channelDetails?.name} channelId={channelId} />
            </div>
        </>
    );
}

export default Chat;