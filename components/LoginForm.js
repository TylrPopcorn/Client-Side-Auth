import React from "react";
import axios from "axios";

//const jwt = require("jsonwebtoken");

const initialFormValues = {
  username: "",
  password: "",
};

//External function
function Login(values) {
  //Begin login process
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginInfo: initialFormValues,
      buttonDisabled: false,
    };
  }

  onSubmit = (evt) => {
    //console.log(evt);
    this.setState({ ...this.state, buttonDisabled: true });

    Login(this.state);

    setTimeout(() => {
      this.setState({ ...this.state, buttonDisabled: false });
    }, 3000);
  };

  onChange = (evt) => {
    console.log("Sdgfsg");
    const { id, value } = evt.target;
    this.setState({ ...this.state, [id]: value });
  };

  render() {
    return (
      <div>
        <form
          id="loginForm"
          onSubmit={(evt) => {
            evt.preventDefault();
            this.onSubmit(evt);
          }}
        >
          <h2> Login</h2>
          <input
            id="username"
            placeholder="Enter username"
            maxLength={20}
            onChange={this.onChange}
            value={this.state.username}
          />
          <input
            id="password"
            placeholder="Enter password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <button id="submitCredentials" disabled={this.state.buttonDisabled}>
            Submit credentials
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
