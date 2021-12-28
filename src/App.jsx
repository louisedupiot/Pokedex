//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css'; 

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon?limit=20&offset=20')

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
        //allPokemons.push(data)
        await console.log(allPokemons)
      })
    }

    createPokemon(data.results)
    await console.log(allPokemons)
  }

  useEffect(() =>{
    getAllPokemons()
  }, [])

  return (
    <div className="App">
      <h1> Pokemons </h1>
      <div className="Pokemon">
        <div className="AllPokemons">

        </div>

      <button className='pokebtn'>Pokemons</button>

      </div>
    </div>
  );
}

export default App;
