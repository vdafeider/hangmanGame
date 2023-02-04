import { configureStore } from '@reduxjs/toolkit';
import GameBBL from '../features/game_bbl/gameSlice';

export const store = configureStore({
  reducer: {
    game: GameBBL,
  },
});
