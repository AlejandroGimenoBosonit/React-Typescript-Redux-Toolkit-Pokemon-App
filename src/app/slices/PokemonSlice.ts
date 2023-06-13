import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState, generatedPokemonType } from "../../utils/types/app/Types.types";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonData } from "../reducers/getPokemonData";

const initialState: PokemonTypeInitialState = {
    // extra reducers using AsyncThunk and an external API
    allPokemon: undefined,
    randomPokemons: undefined,
    // normal reducer using a local dynamic state structure
    compareQueue: []
};

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addToCompare:(state, action) => {
            // check every pokemon in compareQueue to find the pokemon that we selected and store the index
            const index = state.compareQueue.findIndex(
                (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
            );

            // if pokemon selected is the last one(or the unique) in our state array
            if(index === -1){ 
                
                // limit our comparation to only two pokemons
                if(state.compareQueue.length === 2){
                    // when compareQueue is with 2 pokemon the new one will be inserted at the start of the array
                    // BUT the last one will be deleted
                    state.compareQueue.pop();
                }
                // insert pokemon at the start of the array
                state.compareQueue.unshift(action.payload);
            }
        },
        removeFromCompare: (state, action) => {
            // check every pokemon in compareQueue to find the pokemon that we selected and store the index
            const index = state.compareQueue.findIndex(
                (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
            );

            // make a copy of the actual state, then removes the pokemon with the index
            // later will assig the new state value to the current local state
            const queue = [...state.compareQueue];
            queue.splice(index, 1);
            state.compareQueue = queue;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getInitialPokemonData.fulfilled, (state,action) => {
            // update entire state array
            state.allPokemon = action.payload;
        });

        builder.addCase(getPokemonData.fulfilled, (state, action) => {
            // update state
            state.randomPokemons = action.payload;
        })
    }
});

export const { addToCompare, removeFromCompare } = PokemonSlice.actions;
