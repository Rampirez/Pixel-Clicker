import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
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

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
              value={this.state.username}
              error={this.state.errors.username}
              onChange={this.handleChange}
              type="text"
              id="username"
              className={classnames("fadeIn second", {
                invalid: this.state.errors.username || this.state.errors.usernotfound
              })}
              name="username"
              placeholder="username"
            />
            <span className="red-text">
                  {this.state.errors.username}
                  {this.state.errors.usernotfound}
                </span>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              error={this.state.errors.password}
              type="password"
              id="password"
              className={classnames("fadeIn third", {
                invalid: this.state.errors.password || this.state.errors.passwordincorrect
              })}
              name="password"
              placeholder="password"
            />
            <span className="red-text">
                  {this.state.errors.password}
                  {this.state.errors.passwordincorrect}
                </span>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
