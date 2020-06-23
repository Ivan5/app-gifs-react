import React from "react";
import "./styles.css";
import { Link } from "wouter";

export default function Gif({ gif }) {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/gif/${gif.id}`}>
        <h4>{gif.title}</h4>
        <img src={gif.url} />
      </Link>
    </div>
  );
}
