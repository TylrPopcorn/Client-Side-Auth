import React, { useEffect, useState } from "react";
import { initialArticles } from "./Articles";
//External function.
function postArticle(article) {
  initialArticles.push(article);
  //Reset form
  //Put style on new article elements pushed to the articles
  //update the articles list after submition
  console.log(initialArticles);
}

const ArticleForm = (props) => {
  const { navigate } = props;
  const [state, setState] = useState({
    title: "",
    text: "",
    topic: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem("token");

      if (token == null) {
        navigate("/");
      }
    }, 2);
  }, [navigate]);

  function onChange(evt) {
    const { id, value } = evt.target;
    setState({ ...state, [id]: value });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const article = {
      title: state.title.trim(),
      text: state.text.trim(),
      topic: state.topic,
    };

    if (
      article.title.length > 0 &&
      article.text.length > 0 &&
      article.topic !== ""
    ) {
      postArticle(article);
    } else {
      setError("Invalid form data");

      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div>
      <p id="error">{error}</p>
      <form id="form" onSubmit={onSubmit}>
        <h2> Create Article</h2>
        <input
          maxLength={50}
          placeholder="Enter title"
          onChange={onChange}
          value={state.title}
          id="title"
        />
        <textarea
          maxLength={200}
          placeholder="Enter text"
          id="text"
          value={state.text}
          onChange={onChange}
        />

        <select id="topic" onChange={onChange} value={state.topic}>
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
