import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    {console.log(user);}
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
        <h1>Howdy {user.username}!</h1>
        <br></br>
        <h3>This is your own, personal page!</h3>
        <br></br>
        <button
              onClick={this.onLogoutClick}
              className="btn btn-danger"
            >
              Logout
            </button>
            <br></br>
    </div>
  </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);