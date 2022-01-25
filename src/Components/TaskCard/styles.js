import styled from "styled-components";

export const Container = styled.div`
  background-color: #dce0de;
  width: 85%;
  height: 80%;
  border: 0.5px solid #bababa;
  padding: 20px;
  color: #71717a;
  div:nth-child(0) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  div span h1 {
    text-align: left;
  }
`;

export const Tasks = styled.div`
  overflow-y: auto;
  margin-bottom: 20px;
  width: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: ${(prop) => (prop.notasks ? "" : "center")};
  align-items: ${(prop) => (prop.notasks ? "" : "center")};
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 18px;
  }
  input {
    width: 80%;
    font-size:1rem;
    border-radius: 5px;
    border-color: transparent;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Botao = styled.button`
  background-color: ${(prop) => (prop.disabled ? "#d1cdcd" : "#2626e0")};
  color: ${(prop) => (prop.disable ? "#71717a" : "white")};
  border: 1px solid #aeaeb0;
  margin: 5px 0; 
  display: flex;
  justify-content: flex-end;
`;
