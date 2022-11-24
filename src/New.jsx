import React, { useState, useContext } from "react";
import Cards from "./Cards";
import Data from "./Data";
import Storedata from "./Storedata";

const New = () => {
  const [color, setColor] = useState(Data);
  const { show, showed } = useContext(Storedata);

  return (
    <div>
      {color.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <div className="bounce-in-top">
              <button
                onClick={() => showed(item)}
                style={{
                  backgroundColor: item.color,
                  // flexDirection: "column",
                  border: "none",
                  marginLeft: "20px",
                  borderRadius: "50%",
                  marginTop: "10px",
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default New;
