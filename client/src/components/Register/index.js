import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;
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

          <h1>Sign up!</h1>

          <form noValidate onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.username}
              error={errors.username}
              type="text"
              id="username"
              className="fadeIn second"
              name="username"
              placeholder="username"
            />
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              type="text"
              id="password2"
              className="fadeIn third"
              name="password2"
              placeholder="confirm password"
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
