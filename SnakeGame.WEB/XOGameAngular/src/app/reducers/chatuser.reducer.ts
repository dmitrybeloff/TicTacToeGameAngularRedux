import { ChatUser } from '../models/chatuser.model';
import * as ChatUserActions from '../actions/chatuser.actions';

export function reducer(state: ChatUser, action: ChatUserActions.Actions) {
  switch (action.type) {
    case ChatUserActions.CHATUSERSET:
      return action.payload;
    default:
        return state;
  }
}
