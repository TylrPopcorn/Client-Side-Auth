import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import { initialArticles } from "./Articles";
//------
import Articles from "./Articles";
import LoginForm from "./LoginForm";
import ArticleForm from "./ArticleForm";

function App() {
  //Main function
  const [articles, setArticles] = useState(initialArticles); //Used to hold all of the articles.
  const [error, setError] = useState(""); //Used to show any errors.
  const navigate = useNavigate(); //Used to redirect the user.

  function ERROR(msg) {
    //Used to show any errors.
    setError(msg); //Update the state to show the error

    setTimeout(() => {
      //After some time,
      setError(""); //clear the error
    }, 2000);
  }

  function logout() {
    //When logging out
    localStorage.removeItem("token"); //remove the token from the storage
    navigate("/"); //redirect the user to the homepage
  }

  return (
    //html
    <div className="App">
      <button id="logout" onClick={logout}>
        Logout
      </button>
      <h1> Client-Side Auth </h1> {/* Tittle*/}
      <nav>
        {/* Navigation*/}
        <Link id="loginScreen" to="/">
          Login
        </Link>
        <Link id="articlesScreen" to="/articles">
          Articles
        </Link>
      </nav>
      <p id="error">{error}</p>
      <Routes>
        {/* Routes*/}
        <Route
          path="/"
          element={<LoginForm navigate={navigate} Error={ERROR} />}
        />

        <Route
          exact
          path="articles"
          element={
            <>
              <ArticleForm
                navigate={navigate}
                Error={ERROR}
                Articles={articles}
                setArticles={setArticles}
              />
              <Articles articles={articles} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
