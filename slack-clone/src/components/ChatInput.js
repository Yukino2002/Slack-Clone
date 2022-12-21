import React, { useState } from "react";
import db from "../config/Firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "../styles/chatInput.css";
import { useStateValue } from "./StateProvider";

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);

        if (channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
    };

    return (
        <div className="chatInput">
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
}

export default ChatInput;