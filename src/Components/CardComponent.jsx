import React from 'react'
import './CardComponent.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Linha from "./Linha";
const CardComponent = () => {
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
                <Linha />
                <Linha />
                <Linha />
                <Linha />
                <Linha />
                <Linha />
              </Card.Text>
              <span>Task</span>
              <input maxLength={25} type="text" placeholder="What do you need to do?" />
              <div className="save">
                <Button variant="primary">
                  Save item
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>  
        </div>
    )
}

export default CardComponent
