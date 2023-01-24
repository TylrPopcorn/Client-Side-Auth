import React from "react";

//External function
function Login(values, props) {
  //Begin login process
  const { navigate } = props;

  if (localStorage.getItem("token") == null) {
    //IF there is not already a token made
    const token = [values, "secret_message_:)", { expiresIn: "1h" }]; //create a 'token' (fake token)
    localStorage.setItem("token", token); //set the token in the client side storage
    navigate("/articles"); //redirect the user to a new page.
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    //Constructor
    super(props); //Allow access to 'this'
    this.state = {
      //Set a(n) initial state
      LoginInfo: { username: "", password: "" },
      buttonDisabled: false,
      error: "",
    };
  }
  // -------------------------------- \\
  componentDidMount() {
    //When the whole component has mounted.
    setTimeout(() => {
      //Delay
      const token = localStorage.getItem("token"); //Attempt to get client-sided token
      const { navigate } = this.props;

      if (token != null) {
        //IF the token is found
        navigate("/articles"); //redirect the user.
      }
    }, 2);
  }

  onSubmit = (evt) => {
    //Each time the form gets submitted.
    //console.log(evt);
    const { username, password } = this.state.LoginInfo; //grab info needed.

    if (username.trim().length > 0 && password.trim().length > 0) {
      //IF the form has valid information within it.
      Login(this.state.LoginInfo, this.props); //Login.
    } else {
      this.setState({
        ...this.state,
        error: "Please provide valid login information",
        buttonDisabled: true,
      });
    }

    setTimeout(() => {
      //Delay
      this.setState({ ...this.state, buttonDisabled: false, error: "" }); //Activate the form button again
    }, 1500);
  };

  onChange = (evt) => {
    //Each time the form gets changed.
    const { id, value } = evt.target; //get the appropriate info from the form
    const { LoginInfo } = this.state;

    this.setState({
      //Set/update the state
      ...this.state,
      LoginInfo: { ...LoginInfo, [id]: value },
    });
  };

  render() {
    //Render items to the page for the user to view
    return (
      <div>
        <p id="error">{this.state.error}</p>
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
