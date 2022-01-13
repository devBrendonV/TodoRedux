import React, { useState } from "react";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Linha from "./Linha";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import { createTask } from "../store/actions/actions";

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
    <div className="main">
      <div>
        {[""].map((variant, idx) => (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            className="mb-2 "
          >
            <Card.Body className="configcard">
              <Card.Title>
                <h1>To do:</h1>
              </Card.Title>
              <Card.Text className="tasks">
                {tasks.length === 0 ? (
                  <span className="notask">
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
              </Card.Text>
              <div className="todoinput">
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
              <div className="save">
                <Button
                  disabled={tarefa.trim().length > 0 ? false : true}
                  variant="primary"
                  onClick={() => criarTask(tarefa)}
                >
                  Save item
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
