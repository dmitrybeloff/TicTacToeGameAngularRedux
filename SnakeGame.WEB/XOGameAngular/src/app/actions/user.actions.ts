import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const USERCHANGE = '[user] change';
export const USERUPDATE = '[user] update';
export const USERWRITE = '[user] write';
export const USERCHANGED = '[user] changed';
export const USERCHATCONNECT = '[user] connect to chat';
export const USERHUBCONNECT = '[hub] connect';
export const USERHUBCONNECTED = '[hub] connected';
export const USERHUBDISCONNECT = '[hub] disconnect';
export const USERHUBDISCONNECTED = '[hub] disconnected';


export class UserHubConnectAction implements Action {
  readonly type = USERHUBCONNECT;

  constructor(public payload: User) {}
}

export class UserHubConnectedAction implements Action {
  readonly type = USERHUBCONNECTED;

  constructor(public payload?: any) {}
}

export class UserHubDisconnectAction implements Action {
  readonly type = USERHUBDISCONNECT;

  constructor(public payload?: any) {}
}

export class UserHubDisconnectedAction implements Action {
  readonly type = USERHUBDISCONNECTED;

  constructor(public payload?: any) {}
}

export class UserChangeAction implements Action {
    readonly type = USERCHANGE;

    constructor(public payload: User) {}
}

export class UserUpdateAction implements Action {
    readonly type = USERUPDATE;

    constructor(public payload?: any) {}
}

export class UserWriteAction implements Action {
    readonly type = USERWRITE;

    constructor(public payload: User) {}
}

export class UserChangedAction implements Action {
    readonly type = USERCHANGED;

    constructor(public payload?: any) {}
}

export class UserChatConnectAction implements Action {
  readonly type = USERCHATCONNECT;

  constructor(public payload: User) {}
}

export type Actions = UserChangeAction
  | UserUpdateAction
  | UserWriteAction
  | UserChatConnectAction
  | UserHubConnectAction
  | UserHubConnectedAction
  | UserHubDisconnectAction
  | UserHubDisconnectedAction;
