import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form id="loginForm">
          <h2> Login</h2>
          <input id="username" placeholder="Enter username" maxLength={20} />
          <input id="password" placeholder="Enter password" />
          <button id="submitCredentials">Submit credentials</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
