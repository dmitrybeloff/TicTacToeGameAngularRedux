import * as fromUser from './user.reducer';
import * as fromChat from './chatmessages.reducer';
import * as fromChatMessage from './chatmessage.reducer';
import * as fromTitle from './title.reducer';
import * as fromChatUsers from './chatusers.reducer';
import * as fromChatUser from './chatuser.reducer';
import * as fromInvitingPlayer from './invitingplayer.reducer';
import * as fromAlertMessage from './alertmessage.reducer';
import * as fromPlayer from './player.reducer';
import * as fromGame from './game.reducer';
import * as fromGameMove from './gamemove.reducer';

export const reducers = {
    user: fromUser.reducer,
    chatMessages: fromChat.reducer,
    chatMessage: fromChatMessage.reducer,
    title: fromTitle.reducer,
    chatUsers: fromChatUsers.reducer,
    chatUser: fromChatUser.reducer,
    invitingPlayer: fromInvitingPlayer.reducer,
    alertMessage: fromAlertMessage.reducer,
    player: fromPlayer.reducer,
    game: fromGame.reducer,
    gameMove: fromGameMove.reducer,
};
