import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./index.css";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif"
        />
      </form>

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
