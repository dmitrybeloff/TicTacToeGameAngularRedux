import { ChatMessage } from '../models/chatmessage.model';
import * as chatAction from '../actions/chatmessage.actions';

export function reducer(state: ChatMessage, action: chatAction.Actions) {
    switch (action.type) {
      case chatAction.CHATMESSAGERECIEVED:
        return action.payload;
      default:
            return state;
    }
}
