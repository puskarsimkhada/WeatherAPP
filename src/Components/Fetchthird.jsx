import React, { useEffect, useState } from "react";

const Fetchthird = () => {
  // const [record, setRecord] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  //     .then((Response) => Response.json())
  //     .then((data) => console.log(setRecord(data)));
  //   // .catch((err = console.log(err)));
  // }, []);

  const myObj = [
    {
      id: 1,
      name: "Puskar",
      address: "Ohio",
      phone: 9865123456,
    },
    {
      id: 2,
      name: "Messi",
      address: "Miami",
      phone: 9865123422,
    },
    {
      ob4: {
        fname: "hello",
        lname: "world",
      },
      ob5: {
        age: 12,
      },
    },
  ];
  return (
    <>
      {/* {myObj.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.address}</p>
            <p>{item.phone}</p>
            {Object.entries(item).map(([key, value]) => {
              return (
                <p key={value}>
                  {key}: {value}
                </p>
              );
            })}
          </div>
        );
      })} */}
      {myObj.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
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
          ))}
        </div>
      ))}

      {/* {myObj.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              {typeof value === "object" && value !== null ? (
                Object.entries(value).map(([subKey, subValue]) => (
                  <p key={subKey}>
                    {subKey}: {subValue}
                  </p>
                ))
              ) : (
                <p>
                  {key}: {value}
                </p>
              )}
            </div>
          ))}
        </div>
      ))} */}
    </>
  );
};

export default Fetchthird;
