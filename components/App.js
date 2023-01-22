import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import ArticleForm from "./ArticleForm";

function App() {
  return (
    <div className="App">
      <button id="logout">Logout</button>
      <h1> Advanced Applications </h1>
      <div>{/** ERROR TEXT */}</div>

      <nav>
        <Link id="loginScreen" to="/">
          Login
        </Link>
        <Link id="articlesScreen" to="/articles">
          Articles
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          exact
          path="articles"
          element={
            <>
              <ArticleForm />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
