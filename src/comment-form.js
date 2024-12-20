import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import "./comment-form.css"; // Importing the valid CSS file

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
    <div className="comment-form-container">
      <h2 className="form-header">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Your Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        ></textarea>
        <button type="submit" className="submit-button">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
