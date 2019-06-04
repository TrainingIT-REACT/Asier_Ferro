import React from "react";
import { connect } from "react-redux";
import { getUserName } from "../reducers/user";
import { logoutUser } from "../actions/user";

const User = ({ username, logout }) => {
  return (
    <div className="userPage">
      <h1>User Profile</h1>
      <div>{username}</div>
      <button className="btn" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  username: getUserName(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
