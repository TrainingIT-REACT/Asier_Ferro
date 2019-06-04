import React from "react";
import "./css/index.scss";

const AlbumGrid = ({ albums, callback }) => (
  <div className="albumsPage__container">
    {albums.map((e, i) => (
      <div key={i} onClick={() => callback(e.id)} className="albumsPage__item">
        <img src={e.cover} alt={`${e.name} - ${e.artist} Album`} />
        <span className="albumsPage__item--name">{e.name}</span>
        <span className="albumsPage__item--artist"> {e.artist}</span>
      </div>
    ))}
  </div>
);

export default AlbumGrid;
