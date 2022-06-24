import React, { useEffect, useState } from "react";

const UseKeyYoutubeTrailer = (movie) => {
  const [key, setKey] = useState(null);

  const fetchKey = () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    fetchKey();
  }, []);

  //   console.log(movie);
  return key;
};

export default UseKeyYoutubeTrailer;
