import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Articles from "./Articles";
import LoginForm from "./LoginForm";
import ArticleForm from "./ArticleForm";

function App() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="App">
      <button id="logout" onClick={logout}>
        Logout
      </button>
      <h1> Client-Side Auth </h1>

      <nav>
        <Link id="loginScreen" to="/">
          Login
        </Link>
        <Link id="articlesScreen" to="/articles">
          Articles
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm navigate={navigate} />} />
        <Route
          exact
          path="articles"
          element={
            <>
              <ArticleForm navigate={navigate} />
              <Articles articles={articles} setArticles={setArticles} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
