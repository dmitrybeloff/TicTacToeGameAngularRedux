import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducers } from './reducers/reducers';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/account/profile.component';
import { XORoomComponent } from './components/xogame/xoroom.component';
import { AccountComponent } from './components/account/account.component';

import { AccountService } from './services/account.service';
import { SignalRService } from './services/signalr.service';

import { AccountEffects } from './effects/account.effects';
import { ChatEffects } from './effects/chat.effects';
import { GameEffects } from './effects/game.effects';

import { UserResolver } from './resolvers/user.resolver';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes = [
  { path: 'ViewProfile', component: ProfileComponent, resolve: { user: UserResolver } },
  { path: 'tic-tac-toe-room', component: XORoomComponent, resolve: { user: UserResolver } },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    XORoomComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    EffectsModule.forRoot([
      AccountEffects,
      ChatEffects,
      GameEffects
    ]),
    HttpClientModule,
    // StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [
    AccountService,
    SignalRService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
