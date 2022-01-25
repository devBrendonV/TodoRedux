import styled from "styled-components";

export const Container = styled.div`
  background-color: ${prop => prop.done ? '#86efac' : '#FFF'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;

  span:nth-child(1){
    color: ${prop => prop.done ? 'white' : '#71717a'};
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 1.5rem;
    width: 80%;
    height: 35px;
  }
  span:nth-child(1):first-letter {
    text-transform: uppercase;
  }

  span:nth-child(2){
    display: flex;
    margin-left: 5px;
  }
`;
export const Botao = styled.button`
  background-color: ${(prop) => ['#4ade80','#f43f5e'].filter((a)=>{
    if(a === prop.color){
      return a
    }
  })};
  border: 1px solid #a7a7ab;
  width: auto;
  height: auto;
  color: #555557;
  padding: 5px;
  margin: 0 5px;
`;
