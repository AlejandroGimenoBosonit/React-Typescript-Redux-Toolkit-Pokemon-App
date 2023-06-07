import { useEffect } from 'react'
import { Wrapper } from '../../sections';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInitialPokemonData } from '../../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../../app/reducers/getPokemonData';
import { PokemonCardGrid } from '../../components';
import { debounce } from '../../utils/Debounce';

const Search = () => {

  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(state => state.pokemon);

  // Calling debounce function
  const handleChange = debounce((value: string) => getPokemon(value), 30);

  const getPokemon = async (value: string) => {
    if(value.length) {
      const pokemons = allPokemon?.filter((pokemon) => pokemon.name.includes(value.toLowerCase() ))
      dispatch(getPokemonData(pokemons!));
    }else{
      const clonedPokemons = [...allPokemon as []];
      const randomPokemonsId = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0, 20);;
      dispatch(getPokemonData(randomPokemonsId))
    }    
  }

  useEffect(()=>{
    dispatch(getInitialPokemonData());
  },[dispatch]);

  useEffect(() => {
    // if there is content in API's payload, we want to extract 19 random pokemon
    if(allPokemon) {
      const randomPokemons = [...allPokemon].sort(() => Math.random() - Math.random()).slice(0, 20);
    
      // use random pokemon selection to make another request to obtain pokemon's data
      dispatch(getPokemonData(randomPokemons));
    }
  }, [dispatch, allPokemon]);

  return (
    <div className="search">
      <input type="text" className="pokemon-searchbar" placeholder='Search Pokemon' onChange={(e) => handleChange(e.target.value)}/>
      <PokemonCardGrid pokemons={randomPokemons!} />
    </div>
  )
}

export default Wrapper(Search);