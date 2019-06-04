import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbum } from "../actions/album";
import { toogleSong, fetchSong } from "../actions/song";
import { getAlbum } from "../reducers/album";
import { getSong } from "../reducers/song";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import formattedTime from "../utils/formattedTime";

import "./css/album.scss";

const Albums = withRouter(
  ({ album, fetchAlbum, fetchSong, match, song, toogleSong }) => {
    useEffect(() => {
      fetchAlbum(match.params.id);
    }, []);
    return (
      <div className="albumPage">
        <h1>{album.name}</h1>
        <div className="albumPage__list">
          {album.data.map((e, i) => (
            <div
              key={i}
              className={`albumPage__list--item ${
                song.id === e.id ? "albumPage__list--active" : ""
              }`}
              onClick={() =>
                song.id === e.id
                  ? toogleSong(!song.playing)
                  : fetchSong(e.id, {
                      artist: album.artist,
                      cover: album.cover
                    })
              }
            >
              <div className="albumPage__list--button">
                <FontAwesomeIcon
                  icon={song.id === e.id && song.playing ? faPause : faPlay}
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="albumPage__list--name">{e.name}</div>
              <div className="albumPage__list--time">
                {formattedTime(e.seconds)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

const mapStateToProps = state => ({
  album: getAlbum(state),
  song: getSong(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchSong: (id, album) => dispatch(fetchSong(id, album)),
  toogleSong: val => dispatch(toogleSong(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
