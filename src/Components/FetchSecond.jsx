import React, { useEffect, useState } from "react";

const FetchSecond = () => {
  const [record, setRecord] = useState(null);
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((Response) => Response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {record ? (
        <>
          <ul>
            <li>Time Updated: {record.time.updated}</li>
            <li>Time Updated: {record.time.updatedISO}</li>
            <li>Time Updated: {record.time.updateduk}</li>
            <li>{record.disclaimer}</li>
            <li>{record.chartName}</li>
          </ul>
          <ul>
            {Object.entries(record.bpi).map(([item, index]) => {
              return (
                <li key={item}>
                  {item}: <br /> code: {index.code} <br />
                  symbol: {index.symbol} <br />
                  rate: {index.rate} <br />
                  description: {index.description}  <br />
                  rate_float: {index.rate_float} <br />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <li>Loading....</li>
      )}
    </>
  );
};

export default FetchSecond;
