import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";
import "./styles.css";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return (
    <div className="ListOfGifs">
      {gifs.map((gif) => (
        <Gif title={gif.title} url={gif.url} key={gif.id} id={gif.id} />
      ))}
    </div>
  );
};

export default ListOfGifs;
