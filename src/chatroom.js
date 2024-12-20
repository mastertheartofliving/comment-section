import React, { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import "./chatroom.css";

const Chatroom = ({ itemId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");

  // Fetch messages in real-time
  useEffect(() => {
    if (!itemId) {
      console.error("Error: itemId is required but missing.");
      return;
    }

    const messagesRef = collection(db, "chatrooms", itemId, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [itemId]);

  // Add a new message
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !name.trim()) {
      console.warn("Name and message fields cannot be empty.");
      return;
    }

    console.log("Submitting message:", { name, newMessage });

    try {
      const messagesRef = collection(db, "chatrooms", itemId, "messages");
      await addDoc(messagesRef, {
        username: name,
        message: newMessage,
        photoURL: "https://via.placeholder.com/40", // Default profile photo for now
        timestamp: serverTimestamp(),
        itemId,
      });
      console.log("Message added successfully!");
    } catch (error) {
      console.error("Error adding message: ", error);
    }

    setNewMessage(""); // Clear the input field
  };

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
              <span className="timestamp">
                {msg.timestamp?.toDate().toLocaleString() || "Just now"}
              </span>
              <p className="text">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="chat-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatroom;
