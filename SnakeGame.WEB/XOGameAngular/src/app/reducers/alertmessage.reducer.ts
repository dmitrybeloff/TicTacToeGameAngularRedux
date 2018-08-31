import * as AlertMessageActions from '../actions/alretmessage.action';
import { AlertMessage } from '../models/alertmessage.model';

export const initialState: AlertMessage = new AlertMessage();

export function reducer(state = initialState, action: AlertMessageActions.Actions) {
    switch (action.type) {
      case AlertMessageActions.ALERTMESSAGESEND:
        return action.payload;
      case AlertMessageActions.RESETSTATE:
        return Object.assign({}, initialState);
      default:
        return state;
    }
}
