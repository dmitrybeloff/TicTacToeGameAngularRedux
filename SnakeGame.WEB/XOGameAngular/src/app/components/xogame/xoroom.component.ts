import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ChatMessage } from './../../models/chatmessage.model';
import { User } from './../../models/user.model';
import { Invite } from './../../models/invite.model';
import { ChatUser } from '../../models/chatuser.model';
import { AlertMessage } from '../../models/alertmessage.model';
import { InvitingPlayer } from '../../models/invitingplayer.model';
import { Player } from '../../models/player.model';
import { Game } from '../../models/game.model';
import { GameMove } from '../../models/gamemove.model';
import { AppState } from './../../app.state';
import { Store, ReducerManagerDispatcher } from '@ngrx/store';
import * as ChatMessageActions from '../../actions/chatmessage.actions';
import * as ChatUserActions from '../../actions/chatuser.actions';
import * as UserActions from '../../actions/user.actions';
import * as InviteActions from '../../actions/invite.actions';
import * as InvitingPlayerActions from '../../actions/invitingplayer.action';
import * as AlertMessageActions from '../../actions/alretmessage.action';
import * as PlayerActions from '../../actions/player.actions';
import * as GameActions from '../../actions/game.actions';
import * as GameMoveActions from '../../actions/gamemove.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-xoroom',
  templateUrl: './xoroom.component.html',
  styleUrls: [ './xoroom.component.css' ]
})

export class XORoomComponent implements OnInit, OnDestroy {

    isGameSub: Subscription;
    gameEndedSub: Subscription;
    gameStateChangeSub: Subscription;
    chatUserSub: Subscription;
    invitingPlayerSub: Subscription;
    alertMessageSub: Subscription;
    gameStateSub: Subscription;
    playerSub: Subscription;

    chatMessage: ChatMessage;
    chatUser: ChatUser;
    user: User;
    invitingPlayer: InvitingPlayer;
    alertMessage: AlertMessage;
    player: Player;
    gameState: Game;
    connectToGame: boolean;
    isGame: boolean;

    chatUsers$: Observable<ChatUser[]>;
    chatMessages$: Observable<ChatMessage[]>;

    @ViewChild('modal') modal: ElementRef;
    @ViewChild('messageModal') messageModal: ElementRef;

    constructor(private dispatcher: ReducerManagerDispatcher,
      private store: Store<AppState>,
      private cdr: ChangeDetectorRef,
      private route: ActivatedRoute,
    ) {
      this.chatMessage = new ChatMessage();
      this.isGame = false;
    }

    // modal приглашения
    showModal() {
      if (this.invitingPlayer != null && this.invitingPlayer.id.length > 0) {
        $(this.modal.nativeElement).modal('show');
      }
    }

    // modal сообщений сервера
    showAlertModal() {
      if (this.alertMessage != null && this.alertMessage.message.length > 0) {
        $(this.messageModal.nativeElement).modal('show');
      }
    }

    // Метод отправки сообщения в чате
    sendMessage() {
      this.store.dispatch(new ChatMessageActions.ChatMessageSendAction(this.chatMessage));
      // Устанавливаем пустое сообщение после отправки, так как связь двусторонняя
      this.chatMessage.message = '';
    }

    // Метод приглашения в игру
    sendInvite(targetId: string) {
      this.store.dispatch(new InviteActions.GameInviteAction(new Invite(this.chatUser.id, targetId)));
    }

    // Метод отказа
    declineInvite() {
      this.store.dispatch(new InvitingPlayerActions.DeclineInviteAction(this.invitingPlayer));
    }

    // Метод принятия приглашения
    acceptInvite() {
      this.store.dispatch(new InvitingPlayerActions.AcceptInviteAction(this.invitingPlayer));
    }

    // Метод хода
    makeMove(cell: number) {
      // Валидация игрока на клиенте, еще одна будет на сервере
      if (this.player != null && this.player.id === this.gameState.currentId) {
        this.store.dispatch(new GameMoveActions.GameMoveSendAction(new GameMove(
          this.gameState.id,
          this.player.id,
          cell
        )));
      }
    }

    ngOnInit() {
      // Полчуаем пользователя из резолвера и устанавливаем свойства сообщения
      this.user = this.route.snapshot.data.user;
      this.chatMessage.name = this.user.name;
      this.chatMessage.username = this.user.username;

      // Подключаемся к хабу
      this.store.dispatch(new UserActions.UserHubConnectAction(this.user));

      // Создаем observable сообщений чата
      this.chatMessages$ = this.store.select('chatMessages');

      // Подписываемся на модель пользователя чата
      this.chatUserSub = this.store.select('chatUser').subscribe(chatuser => {
        this.chatUser = chatuser;
      });

      // Создаем observable пользователей чата
      this.chatUsers$ = this.store.select('chatUsers');

      // Подписываемся на модель игрока, который будет приглашать
      this.invitingPlayerSub = this.store.select('invitingPlayer').subscribe(invitingPlayer => {
        this.invitingPlayer = invitingPlayer;
        this.showModal();
      });

      // Подписываемся на сообщения сервера
      this.alertMessageSub = this.store.select('alertMessage').subscribe(msg => {
        this.alertMessage = msg;
        this.showAlertModal();
      });

      // Подписываемся на модель игры
      this.gameStateSub = this.store.select('game').subscribe(game => {
        this.gameState = game;
      });

      // Подписываемся на модель игрока
      this.playerSub = this.store.select('player').subscribe(player => this.player = player);

      // Подписываемся на dispatcher для перехвата события получения данных об игроке,
      // чтобы начать игру
      this.isGameSub = this.dispatcher.pipe(filter(action => action.type === PlayerActions.PLAYERRECIEVEDATA))
        .subscribe(() => this.isGame = true);

      // Подписываемся на dispatcher для перехвата события окончания игры
      this.gameEndedSub = this.dispatcher.pipe(filter(action => action.type === GameActions.GAMEENDED))
        .subscribe(() => {
          this.isGame = false;
          this.store.dispatch(new GameActions.ResetStateAction());
        });
    }

    ngOnDestroy() {
      // отписываемся от стора
      this.chatUserSub.unsubscribe();
      this.invitingPlayerSub.unsubscribe();
      this.alertMessageSub.unsubscribe();
      this.playerSub.unsubscribe();
      this.gameStateSub.unsubscribe();
      this.isGameSub.unsubscribe();
      this.gameEndedSub.unsubscribe();
      // отключаемся от хаба
      this.store.dispatch(new UserActions.UserHubDisconnectAction());
      // сбрасываем состояния
      this.store.dispatch(new ChatMessageActions.ResetStateAction());
      this.store.dispatch(new ChatUserActions.ResetStateAction());
      this.store.dispatch(new AlertMessageActions.ResetStateAction());
      this.store.dispatch(new InvitingPlayerActions.ResetStateAction());
      this.store.dispatch(new GameActions.ResetStateAction());
    }
}
