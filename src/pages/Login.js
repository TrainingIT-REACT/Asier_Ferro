import React from "react";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm/index";
import { loginUser } from "../actions/user";
import { getUserName } from "../reducers/user";

import "./css/login.scss";

const Login = ({ loginUser }) => (
  <div className="loginPage">
    <LoginForm callbackOnSubmit={loginUser} />
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state)
});

const mapDispatchToProps = dispatch => ({
  loginUser: username => dispatch(loginUser(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
