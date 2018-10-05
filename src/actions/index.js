// click on new game
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

// guess a number
export const GUESS = 'GUESS';
export const guess = number => ({
  type: GUESS,
  number
});