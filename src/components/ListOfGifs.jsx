import React from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";
import "./styles.css";
import { useGifs } from "../hooks/useGifs";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <div className="ListOfGifs">
      {gifs.map((gif) => (
        <Gif gif={gif} key={gif} />
      ))}
    </div>
  );
};

export default ListOfGifs;
