import { Action } from '@ngrx/store';
import { ChatMessage } from '../models/chatmessage.model';

export const CHATMESSAGEADD = '[chatmessage] add';
export const CHATMESSAGESEND = '[chatmesssage] send';
export const CHATMESSAGESENT = '[chatmessage] sent';
export const CHATMESSAGESPUSH = '[chatmessage] push';
export const CHATMESSAGERECIEVED = '[chatmessage] recieved';
export const CHATMESSAGESRESETSTATE = '[chatmessage] reset state';

export class ChatMessageAddAction implements Action {
    readonly type = CHATMESSAGEADD;

    constructor(public payload: ChatMessage) {}
}

export class ChatMessageSendAction implements Action {
  readonly type = CHATMESSAGESEND;

  constructor(public payload: ChatMessage) {}
}

export class ChatMessageSentAction implements Action {
    readonly type = CHATMESSAGESENT;

    constructor(public payload?: any) {}
}

export class ChatMessagePushAction implements Action {
    readonly type = CHATMESSAGESPUSH;

    constructor(public payload: ChatMessage) {}
}

export class ChatMessageRecievedAction implements Action {
  readonly type = CHATMESSAGERECIEVED;

  constructor(public payload: ChatMessage) {}
}

export class ResetStateAction implements Action {
  readonly type = CHATMESSAGESRESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = ChatMessageAddAction
  | ChatMessageSendAction
  | ChatMessageSentAction
  | ChatMessagePushAction
  | ChatMessageRecievedAction
  | ResetStateAction;
