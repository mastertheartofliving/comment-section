import React, { useState } from "react";
import "./chatroom.css";

const Chatroom = ({ itemId }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "John Doe",
      photoURL: "https://via.placeholder.com/40",
      message: "This is a test message.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      username: "Jane Smith",
      photoURL: "",
      message: "Hello, this is another test!",
      timestamp: "10:45 AM",
    },
  ]);

  return (
    <div className="chatroom-container">
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <img
              src={msg.photoURL || "https://via.placeholder.com/40"}
              alt={`${msg.username}'s profile`}
              className="profile-photo"
            />
            <div className="message-content">
              <span className="username">{msg.username}</span>
              <span className="timestamp">{msg.timestamp}</span>
              <p className="text">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatroom;
