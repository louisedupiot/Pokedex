const Search = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="search">
            <span className="visually-hidden"></span>Chercher un Pokemon : 
        </label>
        <div className="barre">
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="search"
            placeholder="rechercher..."
            name="s"
        />
        </div>
    </form>
);

export default Search;