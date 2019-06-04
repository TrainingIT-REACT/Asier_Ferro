import React, { useEffect } from "react";
import { connect } from "react-redux";
import AlbumGrid from "../components/AlbumGrid/index";
import { getAlbums } from "../reducers/albums";
import { fetchAlbums } from "../actions/albums";
import { withRouter } from "react-router";

const Albums = withRouter(({ albums, fetchAlbums, selectAlbum, history }) => {
  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="albumsPage">
      <h1>Albums</h1>
      <AlbumGrid albums={albums} callback={id => history.push(`album/${id}`)} />
    </div>
  );
});

const mapStateToProps = state => ({
  albums: getAlbums(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
