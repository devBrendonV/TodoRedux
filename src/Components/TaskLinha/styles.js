import styled from "styled-components";

export const Container = styled.li`
  background-color: #e3e1e1;
  font-size: 0.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  list-style: none;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-child(1) button {
    display: none;
  }
  div:nth-child(1):hover button {
    display: block;
  }
  div div:nth-child(1) {
    color: #141414;
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 1rem;
    width: 80%;
    height: 35px;
  }
  div span:nth-child(1):first-letter {
    text-transform: uppercase;
  }
`;
export const Botao = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: auto;
  height: auto;
  font-size: 1rem;
  color: #b31b2a;
  padding: 5px;
  margin: 0 5px;
`;
