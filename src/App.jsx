import BarnameBox from "./components/BarnameBox";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const ser = localStorage.getItem("toDos");
    if (ser) {
      const localItems = ("toDos", JSON.parse(ser));
      setToDos(localItems);
    }
  } ,[]);

  const [inputValue, setInputValue] = useState("");
  const addToDo = () => {
    if (inputValue !== "") {
      const newValue = [...toDos, inputValue];
      setToDos(newValue);

      localStorage.setItem("toDos", JSON.stringify(newValue));
      setInputValue("");
    }
  };

  const deleteHandler = (index) => {
    const newBox = [...toDos.slice(0, index), ...toDos.slice(index + 1)];
    setToDos(newBox);
    localStorage.setItem("toDos", JSON.stringify(newBox));
  };
  return (
    <div className="container">
      <div className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          placeholder="title..."
          autocomplete="off"
          value={inputValue}
          onChange={(a) => setInputValue(a.target.value)}
        />
        <button className="addBtn" onClick={addToDo}>
          Add
        </button>
      </div>
      {toDos.map((item, index) => {
        return (
          <BarnameBox
            deleteHandler={() => deleteHandler(index)}
            text={item}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default App;
