import { SignalRService } from '../services/signalr.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, filter } from 'rxjs/operators';
import * as InviteActions from '../actions/invite.actions';
import * as InvitingPlayerActions from '../actions/invitingplayer.action';
import * as GameMoveActions from '../actions/gamemove.actions';
import * as GameActions from '../actions/game.actions';


@Injectable()
export class GameEffects {
  @Effect()
  invite: Observable<Action> = this.actions$
  .ofType(InviteActions.GAMEINVITE)
  .pipe(switchMap((action: InviteActions.GameInviteAction) =>
    this.signalRService.inviteUser(action.payload).pipe(map(() => {
      return new InviteActions.GameInvitedAction();
    }))
  ));

  @Effect()
  declineinvite: Observable<Action> = this.actions$
  .ofType(InvitingPlayerActions.DECLINEINVITE)
  .pipe(switchMap((action: InvitingPlayerActions.DeclineInviteAction) =>
    this.signalRService.declineInvite(action.payload).pipe(map(() => {
      return new InvitingPlayerActions.DeclinedInviteAction();
    }))
  ));

  @Effect()
  acceptinvite: Observable<Action> = this.actions$
  .ofType(InvitingPlayerActions.ACCEPTINVITE)
  .pipe(switchMap((action: InvitingPlayerActions.AcceptInviteAction) =>
    this.signalRService.acceptInvite(action.payload).pipe(map(() => {
      return new InvitingPlayerActions.AcceptedInviteAction();
    }))
  ));

  @Effect()
  gameMoveSend: Observable<Action> = this.actions$
  .ofType(GameMoveActions.GAMEMOVESEND)
  .pipe(switchMap((action: GameMoveActions.GameMoveSendAction) =>
    this.signalRService.gameDoMove(action.payload).pipe(map(() => {
      return new GameMoveActions.GameMoveSentAction();
    }))
  ));

  constructor(
    private signalRService: SignalRService,
    private actions$: Actions,
  ) {}
}
