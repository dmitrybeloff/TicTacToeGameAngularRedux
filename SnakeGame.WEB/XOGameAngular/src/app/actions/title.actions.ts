import { Action } from '@ngrx/store';

export const TITLESET = '[title] set';
export const TITLEGET = '[title] get';

export class TitleSetAction implements Action {
  readonly type = TITLESET;

  constructor(public payload: string) {}
}

export class TitleGetAction implements Action {
  readonly type = TITLEGET;

  constructor(public payload: string) {}
}

export type Actions = TitleSetAction
  | TitleGetAction;
