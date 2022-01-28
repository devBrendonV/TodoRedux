import styled from "styled-components";

export const Container = styled.div`
  background-color: #dce0de;
  width: 400px;
  height: 600px;
  border: 0.5px solid #bababa;
  padding: 20px;
  color: #71717a;
  h1{
    color:  #5297f7;
  }
  div:nth-child(0) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  div span h1 {
    text-align: left;
  }
`;

export const TaskItem = styled.div`
  overflow-y: auto;
  margin-bottom: 20px;
  width: auto;
  height: 400px;
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  justify-content: ${(prop) => (prop.notasks ? "" : "center")};
  align-items: ${(prop) => (prop.notasks ? "" : "center")};
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    width: 100%;
    font-size:1rem;
    border-radius: 5px;
    border-color: transparent;
    margin-bottom: 10px;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const LocalBotoes = styled.div`
  display: flex;
  justify-content: center;
  
`

export const Botao = styled.button`
  background-color: ${(prop) => (prop.disabled ? "#a0a7b0" : prop.background)};
  color: ${(prop) => (prop.disable ? "#71717a" : "white")};
  border: 1px solid #aeaeb0;
  margin: 5px 5px; 
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  font-size: 1.2rem;
  border-radius: 5px;
`;
