import React, { useEffect, useState } from "react";
import axios from "axios";
const Fetchfour = () => {
  const [product, setProduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    // fetch("https://api.restful-api.dev/objects")
    //   .then((Response) => Response.json())
    //   // .then((data) => console.log(data))
    //   .then((data) => setData(data))
    //   .catch((err) => console.log(err));
    (async () => {
      try {
        setloading(true);
        seterror(false);

        await new Promise((delay) => setTimeout(delay, 2000));

        const respose = await axios.get("https://api.restful-api.dev/objects");
        // console.log(respose.data);
        setProduct(respose.data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    })();
  }, []);
  if (error) {
    return <h1>Something went wrong, please try Again!</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Rest API</h1>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Fetchfour;
