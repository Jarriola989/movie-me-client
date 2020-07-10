import React, { Component } from "react";
import { API_URL } from "../constants";

class CreateAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  createAccount = async () => {
    const url = `${API_URL}/api/users/create`;
  };

  render() {
    return (
      <div className="container">
        <form className="form">
          <h1 className="form--header">
            Register <span>Movie Me Account</span>
          </h1>
          <label htmlFor="firstName" className="form--label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form--input"
            placeholder="First Name"
            onChange={this.handleOnChange}
          />
          <label htmlFor="lastName" className="form--label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form--input"
            placeholder="Last Name"
            onChange={this.handleOnChange}
          />
          <label htmlFor="firstName" className="form--label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form--input"
            placeholder="Username"
            onChange={this.handleOnChange}
          />
          <label htmlFor="firstName" className="form--label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form--input"
            placeholder="Email"
            onChange={this.handleOnChange}
          />
          <label htmlFor="firstName" className="form--label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form--input"
            placeholder="Password"
            onChange={this.handleOnChange}
          />
          <label htmlFor="firstName" className="form--label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form--input"
            placeholder="Confirm Password"
            onChange={this.handleOnChange}
          />
          <button className="form--button">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
