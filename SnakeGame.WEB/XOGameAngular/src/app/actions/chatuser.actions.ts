import { Action } from '@ngrx/store';
import { ChatUser } from '../models/chatuser.model';

export const CHATUSERPUSH = '[chatuser] push';
export const  CHATUSERREMOVE = '[chatuser] remove';
export const CHATUSERSET = '[chatuser] set';
export const RESETSTATE = '[chatuser] reset state';

export class ChatUserPushAction implements Action {
  readonly type = CHATUSERPUSH;

  constructor(public payload: ChatUser) {}
}

export class ChatUserRemoveAction implements Action {
  readonly type = CHATUSERREMOVE;

  constructor(public payload: ChatUser) {}
}

export class ChatUserSetAction implements Action {
  readonly type = CHATUSERSET;

  constructor(public payload: ChatUser) {}
}

export class ResetStateAction implements Action {
  readonly type = RESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = ChatUserPushAction
  | ChatUserRemoveAction
  | ChatUserSetAction
  | ResetStateAction;
