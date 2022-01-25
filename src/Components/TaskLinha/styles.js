import styled from "styled-components";

export const Container = styled.div`
  background-color: ${prop => prop.done ? '#86efac' : '#FFF'};
  display: flex;
  justify-content: space-between;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  align-items: center;
  padding-left: 5px;
  border-radius: 5px;
  margin-bottom: 5px;

  span:nth-child(1){
    color: ${prop => prop.done ? 'white' : '#71717a'};
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 1.5rem;
    width: 80%;
    height: 40px;
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
  width: auto;
  height: auto;
  margin: 0 5px;
`;
