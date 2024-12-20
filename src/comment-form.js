import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && message) {
      try {
        await addDoc(collection(db, "comments"), {
          name: name,
          message: message,
          timestamp: serverTimestamp(),
        });
        setName("");
        setMessage("");
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentForm; // Ensure the default export
