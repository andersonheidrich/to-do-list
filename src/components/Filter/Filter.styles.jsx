import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0 20px 0;
  border-bottom: 2px solid black;

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
  }

  select {
    font-size: 16px;
    margin-bottom: 16px;
    height: 36px;
    border-radius: 4px;
  }
`;

export const FilterContainer = styled.div``;

export const OrderContainer = styled.div``;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  .order-button {
    color: white;
    background-color: purple;
    max-width: 16%;
  }
`;
