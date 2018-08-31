import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from './../../models/user.model';
import { AppState } from './../../app.state';
import * as UserActions from '../../actions/user.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    edit: boolean;
    user$: Observable<User>;
    user: User;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
      this.user = new User();
    }

    onSubmit(): void {
      this.store.dispatch(new UserActions.UserChangeAction(this.user));
      this.store.dispatch(new UserActions.UserWriteAction(this.user));
      this.edit = false;
    }

    onEdit(): void {
      this.edit = true;
    }

    ngOnInit() {
      this.user = this.route.snapshot.data.user;
    }
  }
