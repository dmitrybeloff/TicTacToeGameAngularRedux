import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './../../models/user.model';
import { AppState } from './../../app.state';
import * as userActions from '../../actions/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent implements OnInit {

  user$: Observable<User>;
  title$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new userActions.UserUpdateAction());

    this.user$ = this.store.select('user');

    this.title$ = this.store.select('title');
  }
}
