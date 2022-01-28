import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/actions/actions";
import { Container } from "./styles";
import { Botao } from "./styles";
const TaskLinha = (prop) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  function deletarTask(prop) {
    dispatch(deleteTask(prop));
  }

  return (
    <Container key={prop.delete} done={done}>
      <div>
        <span
          style={!done ? { color: "" } : { color: "white" }}
        >
          {prop.task}
        </span>

        <div >
          <Botao color={'#4ade80'} hidden={done} onClick={() => setDone(!done)} done>
            <i className="fas fa-check-circle"></i>
          </Botao>
          <Botao color={'#f43f5e'}  onClick={() => deletarTask(prop.delete)}>
            <i className="fas fa-trash-alt"></i>
          </Botao>
        </div>
      </div>
    </Container>
  );
};

export default TaskLinha;
