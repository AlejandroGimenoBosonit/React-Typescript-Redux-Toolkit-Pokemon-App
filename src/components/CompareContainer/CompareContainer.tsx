import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { pokemonStatType, pokemonTypeInterface, userPokemonsType } from '../../utils/types/app/Types.types';
import { pokemonTypes } from '../../utils/getPokemonTypes';
import { useDispatch } from 'react-redux';
import { removeFromCompare } from '../../app/slices/PokemonSlice';
import { useNavigate } from 'react-router-dom';
import { addPokemonToList } from '../../app/reducers/addPokemonToList';



const CompareContainer = (
    { pokemon=undefined, isEmpty=false }:{pokemon?: userPokemonsType, isEmpty?: boolean}
) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createStateArray = (types: pokemonTypeInterface[], startType: pokemonStatType) => {
        const statsArray: {name: string; image: string}[] = [];
        const statsSet = new Set<string>();
    
        // Iterate pokemon types array
        types.forEach((type: pokemonTypeInterface) => {
            // 
            const key = Object.keys(type)[0];
            console.log(key);
            

            type[key][startType].forEach((stat: string) => {
                if(!statsSet.has(stat)){
                    // @ts-ignore
                    statsArray.push({name: stat, image: pokemonTypes[stat].image});
                    statsSet.add(stat);

                    console.log(statsSet);
                    
                }
            })

        })

        return statsArray;
    }

    const getStats = () => {
        
        return (
            <>
                <div className="pokemon-types">
                    <h3 className="pokemon-type-title"> Strength </h3>
                    <div className="pokemon-type-icons">
                        {
                            createStateArray(pokemon?.types!, 'strength').map((stat:{image: string}) => (
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon type" className="pokemon-type-image" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="pokemon-types">
                    <h3 className="pokemon-type-title"> Resistance </h3>
                    <div className="pokemon-type-icons">
                        {
                            createStateArray(pokemon?.types!, 'resistance').map((stat:{image: string}) => (
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon type" className="pokemon-type-image" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="pokemon-types">
                    <h3 className="pokemon-type-title"> Vulnerable </h3>
                    <div className="pokemon-type-icons">
                        {
                            createStateArray(pokemon?.types!, 'vulnerable').map((stat:{image: string}) => (
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon type" className="pokemon-type-image" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="pokemon-types">
                    <h3 className="pokemon-type-title"> Weakness </h3>
                    <div className="pokemon-type-icons">
                        {
                            createStateArray(pokemon?.types!, 'weakness').map((stat:{image: string}) => (
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon type" className="pokemon-type-image" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }

  return (
    <div className="compare-container">
        {
            isEmpty && (
                <div className="empty">
                    <button>
                        <FaPlus />
                    </button>
                    <h3>Add Pokemon to Comparison</h3>
                </div>
            )
        }
        {
            pokemon && 
            <div className="compare-element">
                <div className="compare-info">
                    <div className="compare-details">
                        <h3>{ pokemon?.name }</h3>
                        <img src={pokemon?.image} alt="pokemon" className='compare-image'/>
                    </div>
                    <div className="pokemon-types-container">
                        <div className="pokemon-types">
                            <h4 className="pokemon-type-title">Type</h4>
                            <div className="pokemon-type-icons">
                                {
                                    pokemon?.types.map((type: pokemonTypeInterface) => {
                                        const keys = Object.keys(type);

                                        return (
                                            <div className="pokemon-type">
                                                <img src={type[keys[0]].image} alt="pokemon type" className="pokemon-type-image" loading="lazy"/>
                                                {/* <h6 className="pokemon-card-types-type-text">{keys[0]}</h6> */}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {getStats()}
                    </div>
                </div>
                <div className="compare-action-buttons">
                    <button className="compare-btn" onClick={() => {}}>Add</button>
                    <button className="compare-btn" onClick={() => navigate(`/pokemon/${pokemon.id}`)}>View</button>
                    <button className="compare-btn" onClick={() => dispatch(removeFromCompare({id: pokemon.id}))}>Remove</button>
                </div>
            </div>
        }
    </div>
  )
}

export default CompareContainer