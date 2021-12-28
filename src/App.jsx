//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css'; 
import PokemonsCartes from './components/PokemonsCartes';

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
 /*  const [text, setText] = useState("")
  const [filter, setFilter] = useState() */

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    /* console.log(data) */

    function createPokemon (result) {

      result.forEach(async (pokemon) => {
        const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])

      })
    }

   /*  const handleChange = (event)=>
    {
      const inputVal = event.target.value 
      setText(inputVal)
      setFilter(allPokemons.filter((index) =>
       index.name.toLowerCase().includes(inputVal.toLowerCase())
      )
      )} */

    createPokemon(data.results)
    //await console.log(allPokemons)
  }

  useEffect(() =>{
    getAllPokemons()
  }, [])

  return (
    <div className="App">
      <h1 className='title'> <img className='pokeball' src={ require('./pokeball.png')} alt="pokeball"/> Pokemons <img className='pokeball' src={ require('./pokeball.png')} alt="pokeball"/></h1>
{/*       <FilterPokemons handleChange></FilterPokemons> */}
      <div className="Pokemon">
        <div className="AllPokemons">
          {allPokemons.map((pokemon, index) => 
            <PokemonsCartes key={index} 
            id={pokemon.id}  
            name={pokemon.name} 
            image={pokemon.sprites.front_default} 
            type={pokemon.types}
            type2={pokemon.types[0].type.name}
            weight={pokemon.weight} 
            height={pokemon.height} 
            abilities={pokemon.abilities}
            ></PokemonsCartes>)}
        </div>

      </div>
    </div>
  );
}

export default App;
