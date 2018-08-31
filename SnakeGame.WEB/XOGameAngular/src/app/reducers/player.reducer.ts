import { Player } from '../models/player.model';
import * as PlayerActions from '../actions/player.actions';

export function reducer(state: Player, action: PlayerActions.Actions) {
  switch (action.type) {
    case PlayerActions.PLAYERRECIEVEDATA:
        return action.payload;
    default:
        return state;
  }
}
