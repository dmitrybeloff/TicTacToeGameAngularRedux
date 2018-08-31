import { User } from '../models/user.model';
import { SignalRService } from '../services/signalr.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as ChatActions from '../actions/chatmessage.actions';
import * as UserActions from '../actions/user.actions';
import { map, switchMap, filter, tap } from 'rxjs/operators';


@Injectable()
export class ChatEffects {
    @Effect()
    send: Observable<Action> = this.actions$
      .ofType(ChatActions.CHATMESSAGESEND)
      .pipe(switchMap((action: ChatActions.ChatMessageSendAction) =>
        this.signalRService.sendMessage(action.payload).pipe(map(() => {
          return new ChatActions.ChatMessageSentAction();
        }))
      ));

    // @Effect()
    // recieve: Observable<Action> = this.actions$
    //   .ofType(ChatActions.CHATMESSAGERECIEVED)
    //   .pipe(map((action: ChatActions.ChatMessageRecievedAction) =>
    //     new ChatActions.ChatMessagePushAction(action.payload)));

    @Effect()
    connectToHub: Observable<Action> = this.actions$
      .ofType(UserActions.USERHUBCONNECT)
      .pipe(switchMap((action: UserActions.UserHubConnectAction) =>
        this.signalRService.startConnection(action.payload).pipe(map(() => {
          return new UserActions.UserHubConnectedAction();
        }))
      ));

    @Effect()
    disconnectFromHub: Observable<Action> = this.actions$
      .ofType(UserActions.USERHUBDISCONNECT)
      .pipe(map(() => {
        this.signalRService.stopConnection();
        return new UserActions.UserHubDisconnectedAction();
      }));

    @Effect()
    connect: Observable<Action> = this.actions$
      .ofType(UserActions.USERCHATCONNECT)
      .pipe(switchMap((action: UserActions.UserChatConnectAction) =>
        this.signalRService.connect(action.payload).pipe(map(() => {
          return new ChatActions.ChatMessageSentAction();
        }))
      ));

    constructor(
      private signalRService: SignalRService,
      private actions$: Actions,
    ) {}
}
