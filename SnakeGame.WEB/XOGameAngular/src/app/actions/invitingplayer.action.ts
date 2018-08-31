import { Action } from '@ngrx/store';
import { InvitingPlayer } from '../models/invitingplayer.model';

export const RECIEVEINVITE = '[invitingplayer] recieve invite';
export const DECLINEINVITE = '[invitingplayer] decline invite';
export const DECLINEDINVITE = '[invitingplayer] declined invite';
export const ACCEPTINVITE = '[invitingplayer] accept invite';
export const ACCEPTEDINVITE = '[invitingplayer] accepted invite';
export const RESETSTATE = '[invitingplayer] reset state';
export const CONNECTTOGAME = '[invitingplayer] connect to game';

export class RecieveInviteAction implements Action {
  readonly type = RECIEVEINVITE;

  constructor(public payload: InvitingPlayer) {}
}

export class DeclineInviteAction implements Action {
  readonly type = DECLINEINVITE;

  constructor(public payload: InvitingPlayer) {}
}

export class DeclinedInviteAction implements Action {
  readonly type = DECLINEDINVITE;

  constructor(public payload?: any) {}
}

export class AcceptInviteAction implements Action {
  readonly type = ACCEPTINVITE;

  constructor(public payload: InvitingPlayer) {}
}

export class AcceptedInviteAction implements Action {
  readonly type = ACCEPTEDINVITE;

  constructor(public payload?: any) {}
}

export class ConnectToGameAction implements Action {
  readonly type = CONNECTTOGAME;

  constructor(public payload?: any) {}
}

export class ResetStateAction implements Action {
  readonly type = RESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = RecieveInviteAction
  | DeclineInviteAction
  | DeclinedInviteAction
  | ResetStateAction
  | AcceptInviteAction
  | AcceptedInviteAction
  | ConnectToGameAction;
