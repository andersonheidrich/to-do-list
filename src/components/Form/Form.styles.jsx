import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid black;
  padding-top: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  padding: 8px;

  .create-button {
    color: white;
    background-color: purple;
  }

  input {
    width: 64%;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 8px;
  }

  select {
    width: 24%;
    border-radius: 4px;
    font-size: 16px;
  }
`;
