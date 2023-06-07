import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AppSlice } from './slices/AppSlice';
import { PokemonSlice } from './slices/PokemonSlice';

export const store = configureStore({
  reducer: {
    // login information
    app: AppSlice.reducer,
    // storing pokemon's data
    pokemon: PokemonSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
