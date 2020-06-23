import React, { useState, useEffect } from "react";
import getGif from "../services/getGif";

function SingleGif(props) {
  const id = props.params.id;
  const [gif, setGif] = useState({});

  useEffect(() => {
    async function pasar() {
      await getGif(id).then((gif) => {
        setGif(gif);
      });
    }

    pasar();
  }, [id]);

  return (
    <div className="Gif">
      <h4>{gif.title}</h4>
    </div>
  );
}

export default SingleGif;
