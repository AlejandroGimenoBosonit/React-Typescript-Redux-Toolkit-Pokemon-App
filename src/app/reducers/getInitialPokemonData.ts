import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { pokemonsRoute } from "../../utils/Constants";

// async function to make an http request GET
export const getInitialPokemonData = createAsyncThunk(
    "pokemon/initialData", 
    async ()=>{
        try {
            const { data } = await axios.get(pokemonsRoute);
            return data.results;
        } catch (error) {
            console.error(error);
        }
    }
)