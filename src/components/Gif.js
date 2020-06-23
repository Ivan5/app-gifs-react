import React from "react";
import "./styles.css";
import { Link } from "wouter";

export default function Gif({ title, url, id }) {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} />
      </Link>
    </div>
  );
}
