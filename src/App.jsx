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
  }, []);

  const [inputValue, setInputValue] = useState("");
  const addToDo = () => {
    if (inputValue !== "") {
      const newValue = [...toDos, { text: inputValue, isChecked: false }];
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

  const checkOnclick = (text) => {
    const index = toDos.findIndex((item) => item.text === text);
    const isCheckedItem = toDos[index].isChecked;
    let newArray = [];
    if (index > -1) {
      if (isCheckedItem) {
        const updateObject = {
          ...toDos[index],
          isChecked: false,
        };
        newArray = [
          ...toDos.slice(0, index),
          updateObject,
          ...toDos.slice(index + 1),
        ];
        setToDos(newArray);
        localStorage.setItem("toDos", JSON.stringify(newArray));
      } else {
        const updateObject = {
          ...toDos[index],
          isChecked: true,
        };
        newArray = [
          ...toDos.slice(0, index),
          updateObject,
          ...toDos.slice(index + 1),
        ];
        setToDos(newArray);
        localStorage.setItem("toDos", JSON.stringify(newArray));
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          placeholder="title..."
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
            checkOnclick={() => checkOnclick(item.text)}
            text={item.text}
            isChecked={item.isChecked}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default App;
