import React, { useEffect, useState } from "react";

let props; //Used to hold props..
const initialFormData = {
  //Initial data for the article form.
  title: "", //--
  text: "", //--
  topic: "", //--
};
//-----------------
//External function(s). -------:

function postArticle(article) {
  //Used to add a new article to the articles
  const { setArticles } = props;
  setArticles({ type: "ADD", payload: article }); //add an article

  return true; //return success
}

function verifyAuth(navigate) {
  //Used to verify if the user is logged in or not.
  const token = localStorage.getItem("token"); //Check for a token

  if (token == null) {
    //IF the user is NOT logged in,
    navigate("/"); //redirect the user back to the homepage.
  }
}
//
//
//Main function ---------------:
const ArticleForm = (p) => {
  props = p; //update the props variable to be used for the rest of the script.

  const { navigate, Error, Articles } = props; //props passed down from app
  const [state, setState] = useState(initialFormData); //Used to keep track of form data

  useEffect(() => {
    //After the page has loaded.
    setTimeout(() => {
      verifyAuth(navigate); //verify if the usr is logged in or not.
    }, 2);
  }, [navigate]);

  function onChange(evt) {
    //EACH time the form gets changed
    const { id, value } = evt.target; //grab the element that changed
    setState({ ...state, [id]: value }); //Update the form data.
  }

  function onSubmit(evt) {
    //EACH time the form gets submitted
    evt.preventDefault(); //prevent page from reloading.
    const article = {
      //data that will be passed into the article (trimmed):
      article_id: Articles.length + 1,
      title: state.title.trim(),
      topic: state.topic,
      text: state.text.trim(),
    };

    if (
      //IF the article is successfully filled out then
      article.title.length > 0 &&
      article.text.length > 0 &&
      article.topic !== ""
    ) {
      const success = postArticle(article); //Post the article
      if (success) {
        //IF the article successfully posted then
        setState(initialFormData); //clear the form
        navigate("articles"); //update the page i guess
      } else {
        Error("Failed to submit article"); //Call an error
      }
    } else {
      //else
      Error("Invalid form data"); //Call an error
    }
  }

  return (
    //html
    <div>
      <form id="form" onSubmit={onSubmit}>
        {/*Form*/}
        <h2> Create Article</h2> {/* Title of page */}
        <input
          //Title
          maxLength={50}
          placeholder="Enter title"
          onChange={onChange}
          value={state.title}
          id="title"
        />
        <textarea
          //Body text
          maxLength={200}
          placeholder="Enter text"
          id="text"
          value={state.text}
          onChange={onChange}
        />
        {/*Choose topic*/}
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
