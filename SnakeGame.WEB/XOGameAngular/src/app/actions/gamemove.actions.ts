import { Action } from '@ngrx/store';
import { GameMove } from '../models/gamemove.model';

export const GAMEMOVESEND = '[gamemove] send';
export const GAMEMOVESENT = '[gamemove] send';

export class GameMoveSendAction implements Action {
  readonly type = GAMEMOVESEND;

  constructor(public payload: GameMove) {}
}

export class GameMoveSentAction implements Action {
  readonly type = GAMEMOVESENT;

  constructor(public payload?: any) {}
}

export type Actions = GameMoveSendAction
  | GameMoveSentAction;
