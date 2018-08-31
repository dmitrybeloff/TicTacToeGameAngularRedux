import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ChatActions from '../actions/chatmessage.actions';
import * as UserActions from '../actions/user.actions';
import * as ChatUserActions from '../actions/chatuser.actions';
import * as InvitingPlayerActions from '../actions/invitingplayer.action';
import * as AlertMessageActions from '../actions/alretmessage.action';
import * as PlayerActions from '../actions/player.actions';
import * as GameActions from '../actions/game.actions';
import * as GameMoveActions from '../actions/gamemove.actions';
import { InvitingPlayer } from '../models/invitingplayer.model';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';
import { GameMove } from '../models/gamemove.model';
import { User } from '../models/user.model';
import { Invite } from '../models/invite.model';
import { AlertMessage } from '../models/alertmessage.model';
import { ChatMessage } from '../models/chatmessage.model';
import { ChatUser } from '../models/chatuser.model';


declare var $: any;
@Injectable()
export class SignalRService {
  private connection: any;
  private proxy: any;
  private isConnected: boolean;

  constructor(private store: Store<AppState>) {
      this.isConnected = false;
      this.createConnection();
      this.registerOnServerEvents();
  }

  private createConnection() {
      this.connection = $.hubConnection('/signalr');
      this.proxy = this.connection.createHubProxy('XORoomHub');
  }

  public startConnection(user: User) {
    return this.connection.start().done((data: any) => {
      console.log('Connected to Processing Hub');
      this.store.dispatch(new UserActions.UserChatConnectAction(user));
    }).catch((error: any) => {
        console.log('Hub error -> ' + error);
        setTimeout(() =>
          this.startConnection(user),
          5000);
    });
  }

  public stopConnection() {
    this.connection.stop();
  }

  // Регистрация серверных евентов
  public registerOnServerEvents(): void {
        // Здесь связь идет напрямую с AppState, а не через эффекты, потому что если добавить эффекты, то мы получим абсолютно
        // идентичный результат, только с промежуточным action, т.е передадим payload не сразу в стор, а сначала вызовем action,
        // которому передадим payload, который вызовет эффект, который вызовет action,
        // которому передадим копию того же payload, и только потом payload попадет в стор.
        // Я считаю, что здесь не нужно использовать эффекты, но могу ошибаться.

        this.proxy.on('RecieveChatMessage', (name: string, username: string, message: string) => {
            this.store.dispatch(new ChatActions.ChatMessagePushAction(new ChatMessage(name, username, message)));
        });

        this.proxy.on('OnConnected', (id: string, name: string, username: string, users: any[] ) => {
          this.store.dispatch(new ChatActions.ChatMessagePushAction(new ChatMessage('CHAT', username, 'Hello ' + username + '!')));
          // устанавливаем только id, остальные поля оставляем пустыми, так как они не понадобятся
          this.store.dispatch(new ChatUserActions.ChatUserSetAction(new ChatUser(id)));
          users.forEach(element => {
            this.store.dispatch(new ChatUserActions.ChatUserPushAction(new ChatUser(element.Id, element.Name, element.Username)));
            console.log(element);
          });
        });

        this.proxy.on('OnNewUserConnected', (id: string, name: string, username: string) => {
          this.store.dispatch(new ChatActions.ChatMessagePushAction(new ChatMessage('CHAT', username, username + ' connected!')));
          this.store.dispatch(new ChatUserActions.ChatUserPushAction(new ChatUser(id, name, username)));
        });

        this.proxy.on('OnUserDisconnected', (id: string, name: string, username: string) => {
          console.log(username + ' disconnected recieved');
          this.store.dispatch(new ChatActions.ChatMessagePushAction(new ChatMessage('CHAT', username, username + ' disconnected!')));
          this.store.dispatch(new ChatUserActions.ChatUserRemoveAction(new ChatUser(id, name, username)));
        });

        this.proxy.on('OnInvite', (callerId: string, callerUsername: string) => {
          console.log(callerUsername + ' invited');
          this.store.dispatch(new InvitingPlayerActions.RecieveInviteAction(new InvitingPlayer(callerId, callerUsername)));
        });

        this.proxy.on('OnAlert', (message: string) => {
          this.store.dispatch(new AlertMessageActions.AlertMessageSendAction(new AlertMessage(message)));
        });

        this.proxy.on('ConnectToGame', (id: string, username: string, ptype: string) => {
          this.store.dispatch(new PlayerActions.PlayerRecieveDataAction(new Player(id, username, ptype)));
        });

        this.proxy.on('OnSetGameState', (gameid: number, cuirrentId: string, currentUsername: string, deck: string[]) => {
          this.store.dispatch(new GameActions.GameRecieveStateAction(new Game(gameid, cuirrentId, currentUsername, deck)));
        });

        this.proxy.on('OnGameEnded', () => {
          this.store.dispatch(new GameActions.GameEndedAction());
        });
    }

  // Далее идут методы, вызывающие методы на сервере. Для них уже используются эффекты.

  // Отправка сообщения в чат
  public sendMessage(message: ChatMessage) {
    return this.proxy.invoke('SendChatMessage', message.name, message.username, message.message)
      .catch((error: any) => {
          console.log('SendChatMessage error -> ' + error);
      });
  }

  // Приглашение на игру
  public inviteUser(invite: Invite) {
    return this.proxy.invoke('InviteUser', invite.callerId, invite.targetId)
      .catch((error: any) => {
        console.log('Invite error -> ' + error);
      });
  }

  // Отказ от приглашения
  public declineInvite(invitingPlayer: InvitingPlayer) {
    return this.proxy.invoke('DeclineInvite', invitingPlayer.id)
    .catch((error: any) => {
      console.log('Decline Invite error -> ' + error);
    });
  }

  // Принятие приглашения
  public acceptInvite(invitingPlayer: InvitingPlayer) {
    return this.proxy.invoke('AcceptInvite', invitingPlayer.id)
    .catch((error: any) => {
      console.log('Accept Invite error -> ' + error);
    });
  }

  // Ход
  public gameDoMove(gameMove: GameMove) {
    return this.proxy.invoke('RecieveGameState', gameMove.gameId, gameMove.playerId, gameMove.cellIndex)
    .catch((error: any) => {
      console.log('Game Move error -> ' + error);
    });
  }

  // Подключение к чату
  public connect(user: User) {
    return this.proxy.invoke('Connect', user.name, user.username)
      .done(() => {
        console.log(user.name + ' connection request sent');
      })
      .catch((error: any) => {
          console.log('Connect error -> ' + error);
      });
  }
}
