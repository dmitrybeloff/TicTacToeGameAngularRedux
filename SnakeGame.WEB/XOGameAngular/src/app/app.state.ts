import { User } from './models/user.model';
import { ChatUser } from './models/chatuser.model';
import { ChatMessage } from './models/chatmessage.model';
import { InvitingPlayer } from './models/invitingplayer.model';
import { AlertMessage } from './models/alertmessage.model';
import { Player } from './models/player.model';
import { Game } from './models/game.model';
import { GameMove } from './models/gamemove.model';

export interface AppState {
    readonly title: string;
    readonly user: User;
    readonly chatMessages: ChatMessage[];
    readonly chatMessage: ChatMessage;
    readonly chatUsers: ChatUser[];
    readonly chatUser: ChatUser;
    readonly invitingPlayer: InvitingPlayer;
    readonly alertMessage: AlertMessage;
    readonly player: Player;
    readonly game: Game;
    readonly gameMove: GameMove;
}
