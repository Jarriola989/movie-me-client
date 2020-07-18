import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import Menu from "./components/Menu";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div className="outer-grid">
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route exact path="/" component={MovieSearch} />
        <Route path="/create-account" component={CreateAccount} />
      </BrowserRouter>
    </div>
  );
}

export default App;
