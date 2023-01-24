import React, { useEffect, useState } from "react";

//External function.
function postArticle(article, { props }) {
  props.SetError("");
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
    postArticle(state, { setError });
  }

  return (
    <div>
      <p id="error">{error}</p>
      <form id="form" onSubmit={onSubmit}>
        <h2> Create Article</h2>
        <input maxLength={50} placeholder="Enter title" onChange={onChange} />
        <textarea
          maxLength={200}
          placeholder="Enter text"
          id="text"
          onChange={onChange}
        />

        <select id="topic" onChange={onChange}>
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
