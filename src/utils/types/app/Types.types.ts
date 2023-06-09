export interface AppTypeInitialState {
    toasts: string [];
    userInfo: UserInfoType | undefined
}

export interface UserInfoType {
    email: string
}

export interface genericPokemonType {
    name: string;
    url: string;
}

export interface PokemonTypeInitialState{
    allPokemon: undefined | genericPokemonType[];
    randomPokemons: undefined | generatedPokemonType[];
    compareQueue: generatedPokemonType[]
}

export interface generatedPokemonType {
    name: string;
    id: number;
    image: string;
    types: pokemonTypeInterface[]
}

export interface pokemonTypeInterface {
    [key: string]: {
        image: string;
        resistance: string[];
        strength: string[];
        weakness: string[];
        vulnerable: string[];
    }
}

export interface PokemonStatsType {
    name: string;
    value: string
}


export interface userPokemonsType extends generatedPokemonType {
    firebaseId?: string;
}

export type pokemonStatType = | "vulnerable" | "weakness" | "strength" | "resistance"