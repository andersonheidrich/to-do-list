import styled from "styled-components";

export const TaskList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
  padding: 8px;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 80%;
  border-radius: 4px;
  border: 2px solid black;

  .task-text {
    margin: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  .complete-button {
    color: white;
    background-color: #6eb16e;
    margin: 0 8px 0 0;
  }

  .delete-button {
    color: white;
    background-color: #f54949;
    margin: 0 0 0 8px;
  }
`;
