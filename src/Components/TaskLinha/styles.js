import styled from "styled-components";

export const Container = styled.li`
  background-color: #86efac;
  font-size:1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  list-style: none;

  div:nth-child(1){
    display: flex;
    justify-content: space-between;
    align-items: center;   
  }
  div:nth-child(1) button{
    display: none;   
  }
  div:nth-child(1):hover button{
    display: block;   
  }
  span:nth-child(1){
    color: #fafafa;
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 1.5rem;
    width: 80%;
    height: 35px;
  }
  span:nth-child(1):first-letter {
    text-transform: uppercase;
  }

  div:nth-child(2){
    display: flex;
    margin-left: 5px;
    
  }
  
`;
export const Botao = styled.button`
  background-color: ${(prop) => prop.color};
  border: 1px solid #a7a7ab;
  width: auto;
  height: auto;
  font-size: 1rem;
  color: #fafafa;
  padding: 5px;
  margin: 0 5px;
`;
