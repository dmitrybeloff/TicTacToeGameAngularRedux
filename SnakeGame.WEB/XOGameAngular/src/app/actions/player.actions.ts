import { Action } from '@ngrx/store';
import { Player } from '../models/player.model';

export const PLAYERRECIEVEDATA = '[player] recieve data';
export const PLAYERDISCONNECTED = '[player] disconnected';

export class PlayerRecieveDataAction implements Action {
  readonly type = PLAYERRECIEVEDATA;

  constructor(public payload: Player) {}
}

export class PlayerDisconnectedAction implements Action {
  readonly type = PLAYERDISCONNECTED;

  constructor(public payload?: any) {}
}

export type Actions = PlayerRecieveDataAction
  | PlayerDisconnectedAction;
