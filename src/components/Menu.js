import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faUser,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <FontAwesomeIcon className="film-icon" icon={faFilm} />
        <h1 className="logo--title">Movie Me</h1>
      </div>
      <ul className="menu--links">
        <li className={true ? "active" : ""}>
          <FontAwesomeIcon icon={faCompass} /> &nbsp; Discover
        </li>
        <li>
          <FontAwesomeIcon icon={faTv} /> &nbsp; My Movies
        </li>
        <br />
        <li>
          <FontAwesomeIcon icon={faUser} /> &nbsp; My Account
        </li>
        <li>
          <FontAwesomeIcon icon={faTimesCircle} /> &nbsp; Logout
        </li>
      </ul>
    </div>
  );
};

export default Menu;
