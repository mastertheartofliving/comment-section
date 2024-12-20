import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase"; // Ensure this matches your firebase.js file path

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Reference the Firestore collection
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));

    // Listen to real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetchedComments);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.message}
            <br />
            <small>{new Date(comment.timestamp?.toDate()).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
