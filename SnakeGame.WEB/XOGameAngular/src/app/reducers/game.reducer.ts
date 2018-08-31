import { Game } from '../models/game.model';
import * as GameActions from '../actions/game.actions';

export const initialState: Game = new Game();

export function reducer(state = initialState, action: GameActions.Actions) {
  switch (action.type) {
    case GameActions.GAMERECIEVESTATE:
      return action.payload;
    case GameActions.RESETSTATE:
      return Object.assign({}, initialState);
    default:
        return state;
  }
}
