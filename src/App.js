import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import Menu from "./components/Menu";
import CreateAccount from "./components/CreateAccount";
import MyAccount from "./components/MyAccount";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="outer-grid">
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route exact path="/" component={MovieSearch} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/sign-in" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
