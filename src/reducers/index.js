import { NEW_GAME, GUESS } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.number]
    });
  } else if (action.type === NEW_GAME) {
    return initialState;
  }
};