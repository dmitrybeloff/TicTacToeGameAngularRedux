import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as userActions from '../actions/user.actions';
import { User } from '../models/user.model';
import { map, filter, take } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserResolver implements Resolve<Observable<User>> {
  constructor(private store: Store<AppState>) {}

  resolve(): Observable<User> {
    this.store.select('user').subscribe(user => {
      if (!user) {
        this.store.dispatch(new userActions.UserUpdateAction());
      }
    });
    return this.store.select('user').pipe(filter(user => !!user), take(1));
  }
}
