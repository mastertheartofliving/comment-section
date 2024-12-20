import React from "react";
import CommentList from "./comment-list"; // Ensure the path is correct
import CommentForm from "./comment-form"; // Ensure the path is correct

function App() {
  return (
    <div>
      <h1>Comment Section</h1>
      <p>This is a test message to check rendering.</p>
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default App;
