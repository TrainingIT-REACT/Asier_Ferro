import React, { useEffect } from "react";
import { connect } from "react-redux";
import AlbumGrid from "../components/AlbumGrid/index";
import { getRecommended } from "../reducers/recommended";
import { fetchRecommended } from "../actions/recommended";
import { withRouter } from "react-router";

const Recommended = withRouter(({ albums, fetchRecommended, history }) => {
  useEffect(() => {
    fetchRecommended();
  }, []);

  return (
    <div className="recommendedPage">
      <h1>Recommended</h1>
      <AlbumGrid albums={albums} callback={id => history.push(`album/${id}`)} />
    </div>
  );
});

const mapStateToProps = state => ({
  albums: getRecommended(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecommended: () => dispatch(fetchRecommended())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommended);
