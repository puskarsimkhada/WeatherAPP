import React from "react";
import { useEffect, useState } from "react";
const Fetchfirst = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((Response) => Response.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ul>
        {data ? (
          <>
            <li>{data.userId}</li>
            <li>{data.id}</li>
            <li>{data.title}</li>
            <li>{data.completed}</li>
          </>
        ) : (
          <>
            <li>Loading...</li>
          </>
        )}
      </ul>
      {/* <ul>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item.id}</li>
            <li>{item.title}</li>
          </React.Fragment>
        ))}
      </ul> */}
    </>
  );
};

export default Fetchfirst;
