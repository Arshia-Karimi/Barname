import "./add.css";

function BarnameBox({ text, deleteHandler, checkOnclick, isChecked }) {
  return (
    <ul className="taksList">
      <li
        onClick={(e) => {
          e.stopPropagation();
          checkOnclick();
        }}
        className={isChecked ? "done" : undefined}
      >
        {text}
        <span
          className="closeBtn"
          onClick={(e) => {
            e.stopPropagation();
            deleteHandler();
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  );
}

export default BarnameBox;
