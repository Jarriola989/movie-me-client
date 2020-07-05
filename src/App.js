import React from "react";
import MovieSearch from "./components/MovieSearch";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="outer-grid">
      {/* <h1 className="title">Movie Me</h1> */}
      <Menu />
      <MovieSearch />
    </div>
  );
}

export default App;
