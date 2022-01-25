import React, { useState } from "react";
import Linha from "../TaskLinha";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { createTask } from "../../store/actions/actions";
import { Botao, Container, Tasks,Input } from "./styles";

const CardComponent = () => {
  const [tarefa, setTarefa] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.todo);
  function criarTask(prop) {
    let id = uuidv4();
    dispatch(createTask({ todoTask: prop, id: id }));
    setTarefa("");
  }
  return (
    <Container>
      <div>
            <span>
              <span>
                <h1>To do:</h1>
              </span>
              <Tasks notasks={tasks.length > 0}>
                {tasks.length === 0 ? (
                  <span >
                    <span>No tasks</span>
                  </span>
                ) : (
                  tasks.map((task, indice) => {
                    return (
                      <Linha
                        key={task.id}
                        delete={task.id}
                        task={task.todoTask}
                        indice={indice}
                      ></Linha>
                    );
                  })
                )}
              </Tasks>
              <Input>
                <div>
                <label id="taskinput">Task </label>
                <input
                  id="taskinput"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && tarefa.trim().length > 0) {
                      criarTask(tarefa);
                    }
                  }}
                  autoFocus
                  value={tarefa}
                  type="text"
                  placeholder="What do you need to do?"
                  onChange={(e) => setTarefa(e.target.value)}
                />
                </div>
              <div>
                <Botao
                  disabled={tarefa.trim().length > 0 ? false : true}
                  variant="primary"
                  onClick={() => criarTask(tarefa)}
                >
                  Save item
                </Botao>
              </div>
              </Input>
            </span>
      </div>
    </Container>
  );
};

export default CardComponent;
