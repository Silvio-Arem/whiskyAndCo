export default function SearchBar() {
    return (
      <div className="busca">
        <form action="/busca" method="get">
          <input type="text" name="termo_busca" placeholder="" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }