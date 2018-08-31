import { GameMove } from '../models/gamemove.model';
import * as GameMoveActions from '../actions/gamemove.actions';

export function reducer(state: GameMove, action: GameMoveActions.Actions) {
  switch (action.type) {
    case GameMoveActions.GAMEMOVESEND:
        return action.payload;
    default:
        return state;
  }
}
