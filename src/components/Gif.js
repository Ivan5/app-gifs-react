import React from "react";
import "./Gif.css";
import { Link } from "wouter";
export default function Gif({ title, url, id }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <h4>{title}</h4>
      <img src={url} />
    </Link>
  );
}
