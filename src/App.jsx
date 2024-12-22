import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const handleDelete = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };
  const currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[currentDate.getDay()];


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setToDos([...toDos, { id: Date.now(), text: toDo, state: false }]);
          }}
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj, index) => {
          return (
            <div key={index} className="todo">
              <div className="left">
                <input
                  value={obj.state}
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.state = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p className={obj.state ? "false" : ""}>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => handleDelete(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
