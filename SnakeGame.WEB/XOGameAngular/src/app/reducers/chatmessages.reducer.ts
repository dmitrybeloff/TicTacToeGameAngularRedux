import { ChatMessage } from '../models/chatmessage.model';
import * as ChatMessageActions from '../actions/chatmessage.actions';

export const initialState: ChatMessage[] = [];

export function reducer(state = initialState, action: ChatMessageActions.Actions) {
    switch (action.type) {
        case ChatMessageActions.CHATMESSAGESPUSH:
        const messages = state.length ? state : [];
          return [...messages, action.payload];
        case ChatMessageActions.CHATMESSAGESRESETSTATE:
          return Object.assign({}, initialState);
        default:
            return state;
    }
}
