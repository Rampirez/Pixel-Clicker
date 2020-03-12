import React from "react";
import "./style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.username,
      password: this.state.password
    };
    console.log(userData);
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://piskel-imgstore-b.appspot.com/img/f86d1082-5f00-11ea-95bd-2b8516267d01.gif"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form noValidate onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.username}
              error={errors.username}
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="register">
              New Gamer?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
