import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

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
    <>
      {gifs.map((gif) => (
        <Gif title={gif.title} url={gif.url} key={gif.id} id={gif.id} />
      ))}
    </>
  );
};

export default ListOfGifs;
