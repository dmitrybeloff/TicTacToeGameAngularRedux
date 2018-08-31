import { Action } from '@ngrx/store';
import { AlertMessage } from '../models/alertmessage.model';

export const ALERTMESSAGESEND = '[aleertmessage] send';
export const RESETSTATE = '[alertmessage] reset state';

export class AlertMessageSendAction implements Action {
  readonly type = ALERTMESSAGESEND;

  constructor(public payload: AlertMessage) {}
}

export class ResetStateAction implements Action {
  readonly type = RESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = AlertMessageSendAction
  | ResetStateAction;
