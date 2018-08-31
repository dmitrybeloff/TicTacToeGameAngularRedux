import { Action } from '@ngrx/store';
import { Invite } from '../models/invite.model';

export const GAMEINVITE = '[invite] invite';
export const GAMEINVITED = '[invite] invited';
export const RESETSTATE = '[invite] reset state';

export class GameInviteAction implements Action {
  readonly type = GAMEINVITE;

  constructor(public payload: Invite) {}
}

export class GameInvitedAction implements Action {
  readonly type = GAMEINVITED;

  constructor(public payload?: any) {}
}

export class ResetStateAction implements Action {
  readonly type = RESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = GameInviteAction
  | GameInvitedAction
  | ResetStateAction;
