/* eslint-disable react/prop-types */
import * as Style from "./Filter.styles";
import Button from "../Button";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <Style.Container>
      <Style.FilterContainer>
        <h3>Filtrar:</h3>
        <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
      </Style.FilterContainer>
      <Style.OrderContainer>
        <h3>Ordem alfabética:</h3>
        <Style.ButtonGroup>
          <Button className="order-button" onClick={() => setSort("Asc")}>
            Asc
          </Button>
          <Button className="order-button" onClick={() => setSort("Desc")}>
            Desc
          </Button>
        </Style.ButtonGroup>
      </Style.OrderContainer>
    </Style.Container>
  );
};

export default Filter;
