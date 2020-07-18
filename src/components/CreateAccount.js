import React, { Component } from "react";
import { API_URL } from "../constants";
import "./form.css";

class CreateAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    user: {},
    loading: false,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  createAccount = async (e) => {
    e.preventDefault();
    console.log("posting");
    const { firstName, lastName, username, email, password } = this.state;
    this.setState({ loading: true });
    try {
      const url = `${API_URL}/api/users/create`;
      const body = {
        firstName,
        lastName,
        username,
        email,
        password,
      };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      let response = await fetch(url, options);
      let data = await response.json();
      this.setState({ user: data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.createAccount}>
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
          <button className="form--button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
