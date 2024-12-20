import React from "react";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";

function App() {
  return (
    <div className="app-container">
      <h1>Modern Comment Section</h1>
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default App;
