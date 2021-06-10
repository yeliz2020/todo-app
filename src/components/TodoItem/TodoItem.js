import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {
  const { content } = props;
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <li className={isActive ? "checked" : null} onClick={toggleClass}>
        {content}
      </li>
      <button className="btn btn-danger btnItem"> Sil </button>
    </div>
  );
}

export default Todo;
