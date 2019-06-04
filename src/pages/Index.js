import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getUserName, getIsSignedIn } from "../reducers/user";

import { getSong } from "../reducers/song";
import { toogleSong } from "../actions/song";
import "./css/index.scss";

const Recommended = lazy(() => import("./Recommended"));
const Albums = lazy(() => import("./Albums"));
const Album = lazy(() => import("./Album"));
const User = lazy(() => import("./User"));
const NoMatch = lazy(() => import("./404"));
const Login = lazy(() => import("./Login"));
const SideBar = lazy(() => import("../components/SideBar"));
const MusicPlayer = lazy(() => import("../components/MusicPlayer"));

const Index = ({ name, isAuthenticated, song, toogleSong }) => (
  <div className="app">
    {isAuthenticated ? (
      <>
        <Router>
          <div className="app__sideBar">
            <Suspense fallback="cargando">
              <SideBar name={name} />
            </Suspense>
          </div>
          <div className="app__content">
            <div className="app__content--page">
              <Suspense fallback="cargando">
                <Switch>
                  <Route path="/" exact component={Recommended} />
                  <Route path="/albums" component={Albums} />
                  <Route path="/album/:id" component={Album} />
                  <Route path="/user" component={User} />
                  <Route component={NoMatch} />
                </Switch>
              </Suspense>
            </div>
          </div>
          <div className="app__footer">
            <Suspense fallback="cargando">
              <MusicPlayer {...song} toogleSong={toogleSong} />
            </Suspense>
          </div>
        </Router>
      </>
    ) : (
      <Suspense fallback="cargando">
        <Login />
      </Suspense>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsSignedIn(state),
  name: getUserName(state),
  song: getSong(state)
});

const mapDispatchToProps = dispatch => ({
  toogleSong: val => dispatch(toogleSong(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
