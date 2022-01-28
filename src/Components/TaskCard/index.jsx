import React, { useState } from "react";
import Linha from "../TaskLinha";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { createTask, clearTasks } from "../../store/actions/actions";
import { Botao, Container, TaskItem, Input, LocalBotoes } from "./styles";

const TaskCard = () => {
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
        <h1>TO-DO APP</h1>
        <Input>
          <div>
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
              placeholder="Add new task"
              onChange={(e) => setTarefa(e.target.value)}
            />
          </div>
        </Input>
        <TaskItem notasks={tasks.length > 0}>
          {tasks.length === 0 ? (
            <span>No tasks</span>
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
        </TaskItem>
      </div>
      <LocalBotoes>
        <Botao
          background={"#0223f5"}
          disabled={tarefa.trim().length > 0 ? false : true}
          variant="primary"
          onClick={() => criarTask(tarefa)}
        >
          Save item
        </Botao>
        <Botao
          background={"#f7191e"}
          disabled={tasks.length > 0 ? false : true}
          variant="primary"
          onClick={() => dispatch(clearTasks())}
        >
          Clear
        </Botao>
      </LocalBotoes>
    </Container>
  );
};

export default TaskCard;
