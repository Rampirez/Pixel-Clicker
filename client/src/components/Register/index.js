import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
    this.props.registerUser(newUser, this.props.history);
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
              className={classnames("fadeIn second", {
                invalid: errors.username
              })}
              name="username"
              placeholder="username"
            />
            <span className="red-text">{errors.username}</span>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              type="text"
              id="password"
              className={classnames("fadeIn third", {
                invalid: errors.password
              })}
              name="password"
              placeholder="password"
            />
            <span className="red-text">{errors.password}</span>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              type="text"
              id="password2"
              className={classnames("fadeIn third", {
                invalid: errors.password2
              })}
              name="password2"
              placeholder="confirm password"
            />
            <span className="red-text">{errors.password2}</span>
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
