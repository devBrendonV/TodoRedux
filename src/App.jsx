import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Linha from "./Components/Linha";

function App() {
  return (
    <div className="App">
      <div className="card">
        {["Secondary"].map((variant, idx) => (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "100%" }}
            className="mb-2"
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
              <input type="text" placeholder="What do you need to do?" />
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
  );
}

export default App;
