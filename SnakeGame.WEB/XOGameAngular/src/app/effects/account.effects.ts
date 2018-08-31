import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AccountEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(UserActions.USERUPDATE)
        .pipe(switchMap(() =>
            this.accountService
                .getData()
                .pipe(map(data => new UserActions.UserChangeAction(data)))
        ));

    @Effect()
    write$: Observable<Action> = this.actions$
        .ofType(UserActions.USERWRITE)
        .pipe(switchMap((action: UserActions.UserWriteAction) => this.accountService.updateData(action.payload)
          .pipe(map(res => new UserActions.UserChangedAction()))
        ));

    constructor(
        private accountService: AccountService,
        private actions$: Actions
    ) {}
}
