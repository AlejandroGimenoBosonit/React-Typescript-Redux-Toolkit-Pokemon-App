import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonStatsType, pokemonTypeInterface } from "../../utils/types/app/Types.types";
import { RootState } from '../store';


interface PokemonInterface {
    id: number;
    name: string;
    types: pokemonTypeInterface[] | string[];
    stats?: PokemonStatsType[];
}

export const addPokemonToList = createAsyncThunk(
    "pokemon/addPokemon",
    async (pokemon: {
        id: number;
        name: string;
        types: pokemonTypeInterface[] | string[];
        stats?: PokemonStatsType[];
    }, {getState, dispatch}) => {
        try {
            console.log(pokemon);
            
            // const {app: user} = getState();

        } catch (error) {
            console.log(error);
        }
    }
);