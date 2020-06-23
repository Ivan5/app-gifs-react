import React from "react";

import "./App.css";
import { Link, Route } from "wouter";

import ListOfGifs from "./components/ListOfGifs";
import SingleGif from "./components/SingleGif";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/gif/:keyword" component={ListOfGifs} />
        <Route path="/gif/:id" component={SingleGif} />
        <Route path="/" component={Home} />
      </section>
    </div>
  );
}

export default App;
