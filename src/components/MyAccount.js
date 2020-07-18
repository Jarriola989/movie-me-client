import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import "./user.css";

class MyAccount extends Component {
  state = {
    user: "Test User",
  };

  render() {
    return (
      <div className="container">
        <h1 className="user--header">
          <FontAwesomeIcon icon={faUserCircle} /> &nbsp;
          {this.state.user}
        </h1>
      </div>
    );
  }
}

export default MyAccount;
