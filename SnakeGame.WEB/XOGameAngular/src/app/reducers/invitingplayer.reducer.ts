import * as InvitingPlayerActions from '../actions/invitingplayer.action';
import { InvitingPlayer } from '../models/invitingplayer.model';

export const initialState: InvitingPlayer = new InvitingPlayer();

export function reducer(state = initialState, action: InvitingPlayerActions.Actions) {
    switch (action.type) {
      case InvitingPlayerActions.RECIEVEINVITE:
        return action.payload;
      case InvitingPlayerActions.DECLINEINVITE:
        return action.payload;
      case InvitingPlayerActions.ACCEPTINVITE:
        return action.payload;
      case InvitingPlayerActions.RESETSTATE:
        return Object.assign({}, initialState);
      default:
        return state;
    }
}
