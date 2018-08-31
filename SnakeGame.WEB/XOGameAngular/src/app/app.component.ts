import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import * as titleActions from './actions/title.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title: Observable<string>;
  _title: string;

constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this._title = 'Tic-Tac-Toe Game';
    this.store.dispatch(new titleActions.TitleSetAction(this._title));
  }
}
