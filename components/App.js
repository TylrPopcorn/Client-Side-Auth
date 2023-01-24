import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import ArticleForm from "./ArticleForm";

function App() {
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
      <h1> Advanced Applications </h1>

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
              <ArticleForm />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
