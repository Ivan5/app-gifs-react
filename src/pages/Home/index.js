import React from "react";
import { Link } from "wouter";
import "./index.css";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

function Home() {
  return (
    <>
      <h3 className="App-title">Los Gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popular) => (
          <li key={popular}>
            <Link to={`/gif/${popular}`}>Gifs de {popular}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
