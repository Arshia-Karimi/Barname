import { useState } from "react";
import "./add.css";

function BarnameBox({ text, deleteHandler }) {
  const [open, setOpen] = useState(false);
    

  return (
    <ul className="taksList">
      <li onClick={() => setOpen(!open)} className={open ? "done" : undefined}>
        {text}
        <span className="closeBtn" onClick={deleteHandler}>
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  );
}

export default BarnameBox;
