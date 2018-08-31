import { Action } from '@ngrx/store';
import { Game } from '../models/game.model';

export const GAMERECIEVESTATE = '[game] recieve state';
export const GAMEENDED = '[game] ended';
export const RESETSTATE = '[game] reset state';

export class GameRecieveStateAction implements Action {
  readonly type = GAMERECIEVESTATE;

  constructor(public payload: Game) {}
}

export class GameEndedAction implements Action {
  readonly type = GAMEENDED;

  constructor(public payload?: any) {}
}

export class ResetStateAction implements Action {
  readonly type = RESETSTATE;

  constructor(public payload?: any) {}
}

export type Actions = GameRecieveStateAction
  | GameEndedAction
  | ResetStateAction;
