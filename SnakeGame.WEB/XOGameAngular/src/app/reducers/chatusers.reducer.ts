import { ChatUser } from '../models/chatuser.model';
import * as ChatUserActions from '../actions/chatuser.actions';

export const initialState: ChatUser[] = [];

export function reducer(state = initialState, action: ChatUserActions.Actions) {
    switch (action.type) {
        case ChatUserActions.CHATUSERPUSH:
          const users = state.length ? state : [];
          if (!users.some(x => x.id === action.payload.id)) {
            return [...users, action.payload];
          } else {
            return state;
          }
        case ChatUserActions.CHATUSERREMOVE:
          const chatUsers = state.length ? state : [];
          const index = chatUsers.findIndex(x => x.id === action.payload.id);
          if (index > -1) {
            chatUsers.splice(index, 1);
            return chatUsers;
          } else {
            return state;
          }
        case ChatUserActions.RESETSTATE:
          return Object.assign({}, initialState);
        default:
            return state;
    }
}
