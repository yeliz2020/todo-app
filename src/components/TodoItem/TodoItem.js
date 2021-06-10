import React from "react";
import "./TodoItem.css";
import {useState} from "react";

function Todo(props) {
  const { content } = props;
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return <div className={isActive ? 'checked': null} 
  onClick={toggleClass} > {content}</div>;
}

export default Todo;
