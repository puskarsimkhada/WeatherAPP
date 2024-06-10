import React, { useEffect, useState } from "react";
import axios from "axios";

const Crick = () => {
  const [livescore, setlivescore] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    // fetch(
    //   "https://api.cricapi.com/v1/currentMatches?apikey=4a9bb83b-61a2-4ed8-8f87-541ef33a0a0e&offset=0"
    // )
    //   .then((Response) => Response.json())
    //   // .then((data) => console.log(data))
    //   .then((data) => {
    //     if (data && Array.isArray(data.data)) {
    //       setlivescore(data.data);
    //     } else {
    //       console.error("Unexpected data format:", data);
    //     }
    //   })
    //   .catch((err) => console.log(err));
    (async () => {
      try {
        setloading(true);
        seterror(false);
        const response = await axios.get(
          "https://api.cricapi.com/v1/currentMatches?apikey=4a9bb83b-61a2-4ed8-8f87-541ef33a0a0e&offset=0"
        );
        // console.log(response.data);
        setlivescore(response.data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    })();
  }, []);
  if (error) {
    return <h1>Something went wrong please try Again!</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1>Cricket Live Score</h1>
      {livescore.map((score, index) => {
        return (
          <div key={index}>
            <h2>{score.name}</h2>
            <p>{score.matchType}</p>
            <p>{score.status}</p>
            <p>{score.venue}</p>
            <p>{score.date}</p>
            <p>{score.dateTimeGMT}</p>
            <p>
              Teams: {score.teams[0]} vs {score.teams[1]}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Crick;
