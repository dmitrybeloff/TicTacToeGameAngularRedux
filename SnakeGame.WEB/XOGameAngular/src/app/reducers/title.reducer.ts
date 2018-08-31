import * as titleAction from '../actions/title.actions';

export function reducer(state: string, action: titleAction.Actions) {
    switch (action.type) {
      case titleAction.TITLEGET:
        return action.payload;
      case titleAction.TITLESET:
        return action.payload;
      default:
            return state;
    }
}
