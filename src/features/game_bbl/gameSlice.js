import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  word: '',
  hiddenLetters: [],
  gameStatus:'playing',
  wrongAnsCounter:0,
};

export const GameBBL = createSlice({
  name: 'game',
  initialState,

  reducers: {
    //makes the logic to start the new game
    newGame: (state, action) => {
      const ch=[];
      state.word=action.payload;
      [...action.payload].map(c => ch.push('_'))
      state.hiddenLetters=ch;
      if (!localStorage.getItem("wins")) {
        localStorage.setItem("wins", 0)
        localStorage.setItem("losts", 0)
      }
    },
    //logic starts on every letter guess
    chckLetter:(state, action) => {
      if (state.word.includes(action.payload.toLowerCase())){
        const indexes = [];
        const pattern= new RegExp(action.payload.toLowerCase(), "g");
        state.word.replace(pattern,function(match, index){
          indexes.push(index);
        });
        indexes.map(index => state.hiddenLetters[index]=action.payload);
        //checks wether all the letters are guessed and the game is won
        if(!state.hiddenLetters.includes("_")){
          state.gameStatus='won';
          localStorage.setItem("wins", JSON.parse(localStorage.getItem("wins"))+1);
          window.dispatchEvent(new Event('storage'));
        }
      } else {
        //counts fail attepms to guess the letter
        state.wrongAnsCounter<11&&state.wrongAnsCounter++;
        //checks wether all attemps to guess are used and the game is lost
        if(state.wrongAnsCounter===10){
          state.gameStatus='lost';
          state.hiddenLetters=state.word;
          localStorage.setItem("losts", JSON.parse(localStorage.getItem("losts"))+1);
          window.dispatchEvent(new Event('storage'));
        }
      }
    }
  }
});

export const { chckLetter, newGame } = GameBBL.actions;
export default GameBBL.reducer;