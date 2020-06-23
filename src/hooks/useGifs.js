import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const kewordToUse = keyword ? keyword : localStorage.getItem("lastKeyword");
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
}
