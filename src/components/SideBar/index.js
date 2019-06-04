import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faCompactDisc
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import "./css/index.scss";

const colorStyle = { color: "#fff" };

const SideBar = ({ name }) => (
  <div className="sideBar">
    <div className="sideBar__user">
      <NavLink to="/user">
        <FontAwesomeIcon icon={faUser} style={colorStyle} />
        <span>{name}</span>
      </NavLink>
    </div>
    <ul className="sideBar__menu">
      <li>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} style={colorStyle} />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/albums">
          <FontAwesomeIcon icon={faCompactDisc} style={colorStyle} />
          <span>Albums</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default SideBar;
