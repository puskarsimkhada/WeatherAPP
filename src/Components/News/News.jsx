import React, { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-05-09&sortBy=publishedAt&apiKey=5c88f91df372451ca33e74e094680cdd"
      );
      console.log(typeof response);
      // console.log(response.data);
      setData(response.data);
    })();
  }, []);
  return (
    <>
      <h1>News Portal</h1>
      {/* <h1>{data.status}</h1>
      <h2>{data.totalResults}</h2> */}
      {data.map((item, index) => {
        {
          Object.entries(item).map(([key, value]) => (
            <div key={value}>
              {typeof value === "object" && value !== null ? (
                Object.entries(value).map(([subkey, subvalue]) => (
                  <p key={subvalue}>
                    {subkey}: {subvalue}
                  </p>
                ))
              ) : (
                <p>
                  {key} : {value}
                </p>
              )}
            </div>
          ));
        }
      })}
    </>
  );
};

export default News;
