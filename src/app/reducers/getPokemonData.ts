import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/types/app/Types.types";
import axios from "axios";
import { images } from "../../utils/getPokemonImages";
import { defaultImages } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/getPokemonTypes";

interface pokemonData {
    data: {
        id: number,
        types: {
            type: genericPokemonType
        }[]
    }
}

export const getPokemonData = createAsyncThunk(
    "pokemon/randomPokemon",
    async (pokemons: genericPokemonType[]) => {
        try {
            const pokemonsData: generatedPokemonType[] = [];

            for await (const pokemon of pokemons){
                const { data }: pokemonData = await axios.get(pokemon.url);

                // deal with types
                const types = data.types.map(
                    ({type:{name}}:{type:{name:string}}) => ({
                        // @ts-expect-error
                        [name]:pokemonTypes[name]
                    })
                );

                // @ts-expect-error
                let image: string = images[data.id];
                // If there is not shiny pokemon image then assign a normal pokemon image to the array
                //@ts-expect-error
                if(!image) image = defaultImages[data.id];
                
                // If image is filled
                if(image){
                    // Fill pokemonsdata array
                    pokemonsData.push({
                        id: data.id,
                        name: pokemon.name,
                        image,
                        types
                    })
                } 
            }
            return pokemonsData;
        } catch (error) {
            console.error(error);
        }
    }
);