import React, { useEffect, useState } from "react";

const Cricket = () => {
  const [livescore, setlivescore] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=4a9bb83b-61a2-4ed8-8f87-541ef33a0a0e&offset=0"
    )
      .then((Response) => Response.json())
      .then((data) => console.log(data))
      // .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return livescore.map((score, index) => {
    <ul key={index}>
      <li>{score}</li>
    </ul>;
  });
};

export default Cricket;
