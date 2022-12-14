import React from "react";

import '../styles/message.css';

const Message = ({ message, user, userImage, timestamp }) => {
    return (
        <>
            <div className="message">
                <img src={userImage} alt="userImage" />
                <div className="message-info">
                    <h4>
                        {user} {" "}
                        <span className="message-timestamp">
                            {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                    </h4>
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Message;