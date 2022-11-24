import React, { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import New from "./New";
import Storedata from "./Storedata";

function App() {
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState([]);
  const [click, setClick] = useState(1);

  function changed() {
    setClick(click + 1);
    return click;
  }
  let showed = (item) => {
    setShow([...show, { color: item.color, id: changed() }]);
    setFlag(!flag);
  };

  let clicked = () => {
    setFlag(!flag);
  };
  function deletedata(id) {
    const newdata = show.filter((i) => {
      return i.id !== id;
    });
    console.log(newdata);
    setShow(newdata);
  }
  return (
    <Storedata.Provider value={{ show, showed, changed, deletedata }}>
      <nav
        class="navbar navbar-light"
        style={{
          backgroundColor: "yellow",
          border: "4px solid green",
        }}
      >
        <div class="container">
          <a class="navbar-brand" href="#" style={{display:"flex"}}>
            <img
              src="https://play-lh.googleusercontent.com/5CVU5FxK4zV4l1v64zULcyjogYToTJjgeN8HN1uID_0MizgBCfC97ixIB0EQ4OHz7zI"
              alt=""
              width="60px"
              height="60px"
            />
            <h1 style={{color:"white"}}>STICKY NOTES</h1>
          </a>
        </div>
      </nav>
      <div style={{ display: "flex" }}>
        <div className="App" style={{ height: "100vh", width: "10vw" }}>
          <button
            style={{
              cursor: "pointer",
              color: "rgb(0,150,56)",
              borderRadius: "50px",
              marginLeft: "23px",
              marginTop: "50px",
              fontSize: "50px",
              border: "2px solid",
              backgroundColor: "yellow",
              flexDirection: "column",
              height: "90px",
            }}
            onClick={clicked}
          >
            +
          </button>

          {flag ? <New /> : ""}
        </div>
        <div
          style={{
            width: "100vw",
            flexDirection: "row",
          }}
        >
          <Cards />
        </div>
      </div>
    </Storedata.Provider>
  );
}

export default App;
