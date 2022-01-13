import React, { useState } from "react";
import "./Linhas.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/actions/actions";
const Linha = (prop) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  function deletarTask(prop) {
    dispatch(deleteTask(prop));
  }
  return (
    <span key={prop.delete} className={done ? "linha done" : "linha"}>
      <span className="nametask">{prop.task}</span>
      <span className="botaolinha" >
        <Button onClick={() => setDone(!done)} variant="success">
          <i className="fas fa-check-circle"></i>
        </Button>
        <Button onClick={() => deletarTask(prop.delete)} variant="danger">
          <i className="fas fa-trash-alt"></i>
        </Button>
      </span>
    </span>
  );
};

export default Linha;
