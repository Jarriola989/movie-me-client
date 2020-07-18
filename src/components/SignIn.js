import React, { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({});
  return (
    <div className="container">
      <form className="form">
        <h1 className="form--header">
          Sign <span>In</span>
        </h1>
        <label htmlFor="firstName" className="form--label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form--input"
          placeholder="Username"
          // onChange={this.handleOnChange}
        />
        <label htmlFor="lastName" className="form--label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form--input"
          placeholder="Password"
          // onChange={this.handleOnChange}
        />
      </form>
    </div>
  );
};

export default SignIn;
