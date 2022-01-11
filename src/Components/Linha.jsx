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
    <div key={prop.indice} className={done ? "linha done" : "linha"}>
      <span>{prop.nome}</span>
      <span>
        <Button onClick={() => setDone(!done)} variant="success">
          <i className="fas fa-check-circle"></i>
        </Button>
        <Button onClick={() => deletarTask(prop.indice)} variant="danger">
          <i className="fas fa-trash-alt"></i>
        </Button>
      </span>
    </div>
  );
};

export default Linha;
