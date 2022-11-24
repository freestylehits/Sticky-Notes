import React, { useContext } from "react";
import Storedata from "./Storedata";
import "./App.css";

const Cards = () => {
  const { show, deletedata } = useContext(Storedata);
  // const show=prop.show;
  // const deletedata=prop.deletedata;
  return (
    <div className="row " style={{ display: "flex", flexWrap: "wrap" }}>
      {show.map((item) => {
        return (
          <div className="col" key={item.id}>
            <div
              className="rotate-center"
              key={item.id}
              style={{
                background: item.color,
                height: "300px",
                width: "300px",
                marginLeft: "50px",
                marginTop: "50px",
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1 style={{ color: "white", marginLeft: "5px" }}>NOTE</h1>
                  </div>
                  <div>
                    <button
                      onClick={() => deletedata(item.id)}
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px",
                        marginRight: "15px",
                      }}
                    >
                      <img src="/images/delete.png" alt="error" />
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <textarea
                    style={{
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                    }}
                    placeholder="📝"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
