import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/user.model';
import * as userAction from '../actions/user.actions';

export function reducer(state: User, action: userAction.Actions) {
    switch (action.type) {
        case userAction.USERCHANGE:
            return action.payload;
        case userAction.USERWRITE:
            return action.payload;
        case userAction.USERCHATCONNECT:
            return action.payload;
        case userAction.USERHUBCONNECT:
            return action.payload;
        default:
            return state;
    }
}
