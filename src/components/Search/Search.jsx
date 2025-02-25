/* eslint-disable react/prop-types */
import * as Style from "./Search.styles";

const Search = ({ search, setSearch }) => {
  return (
    <Style.Container>
      <h3>Pesquisar:</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </Style.Container>
  );
};

export default Search;
