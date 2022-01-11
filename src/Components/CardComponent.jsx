import React, { useState } from "react";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Linha from "./Linha";

import { useSelector, useDispatch } from "react-redux";
import { createTask } from "../store/actions/actions";

const CardComponent = () => {
  const [tarefa, setTarefa] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.todo);
  function criarTask(prop) {
    dispatch(createTask(prop));
    setTarefa("");
  }

  return (
    <div>
      <div>
        {["Secondary"].map((variant, idx) => (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            className="mb-2 configcard"
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>To do:</Card.Title>
              <Card.Text>
                {tasks.length === 0
                  ? "No tasks"
                  : tasks.map((nome, indice) => {
                      return (
                        <Linha key={indice} nome={nome} indice={indice}></Linha>
                      );
                    })}
              </Card.Text>
              <span>Task</span>
              <input
                value={tarefa}
                maxLength={25}
                type="text"
                placeholder="What do you need to do?"
                onChange={(e) => setTarefa(e.target.value)}
              />
              <div className="save">
                <Button
                  disabled={!tarefa ? true : false}
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
