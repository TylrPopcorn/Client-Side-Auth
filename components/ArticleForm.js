import React from "react";

const ArticleForm = () => {
  return (
    <div>
      <form id="form">
        <h2> Create Article</h2>
        <input maxLength={50} placeholder="Enter title" />
        <textarea maxLength={200} placeholder="Enter text" id="text" />

        <select id="topic">
          <option value="">-- Select topic --</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
        </select>
        <button id="submitArticle">Submit</button>
      </form>
    </div>
  );
};

export default ArticleForm;
