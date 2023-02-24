export default function SearchBar() {
    return (
      <div className="busca">
        <form action="/busca" method="get">
          <input type="text" name="termo_busca" placeholder="Digite aqui sua busca" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }