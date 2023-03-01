import { SearchBarContainer } from "./styles";
import Search from "../../assets/icons/search-icon.png"


export default function SearchBar() {
  return (
    <SearchBarContainer>
      <div className="busca">
        <form action="/busca" method="get">
          <input type="text" name="termo_busca" placeholder="Digite aqui sua busca" />
          <button type="submit"><img src={Search} alt="Buscar" /></button>
        </form>
      </div>
    </SearchBarContainer>
  );
}