(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/alretmessage.action.ts":
/*!************************************************!*\
  !*** ./src/app/actions/alretmessage.action.ts ***!
  \************************************************/
/*! exports provided: ALERTMESSAGESEND, RESETSTATE, AlertMessageSendAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERTMESSAGESEND", function() { return ALERTMESSAGESEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESETSTATE", function() { return RESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageSendAction", function() { return AlertMessageSendAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var ALERTMESSAGESEND = '[aleertmessage] send';
var RESETSTATE = '[alertmessage] reset state';
var AlertMessageSendAction = /** @class */ (function () {
    function AlertMessageSendAction(payload) {
        this.payload = payload;
        this.type = ALERTMESSAGESEND;
    }
    return AlertMessageSendAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = RESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/chatmessage.actions.ts":
/*!************************************************!*\
  !*** ./src/app/actions/chatmessage.actions.ts ***!
  \************************************************/
/*! exports provided: CHATMESSAGEADD, CHATMESSAGESEND, CHATMESSAGESENT, CHATMESSAGESPUSH, CHATMESSAGERECIEVED, CHATMESSAGESRESETSTATE, ChatMessageAddAction, ChatMessageSendAction, ChatMessageSentAction, ChatMessagePushAction, ChatMessageRecievedAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGEADD", function() { return CHATMESSAGEADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGESEND", function() { return CHATMESSAGESEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGESENT", function() { return CHATMESSAGESENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGESPUSH", function() { return CHATMESSAGESPUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGERECIEVED", function() { return CHATMESSAGERECIEVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATMESSAGESRESETSTATE", function() { return CHATMESSAGESRESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageAddAction", function() { return ChatMessageAddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageSendAction", function() { return ChatMessageSendAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageSentAction", function() { return ChatMessageSentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePushAction", function() { return ChatMessagePushAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageRecievedAction", function() { return ChatMessageRecievedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var CHATMESSAGEADD = '[chatmessage] add';
var CHATMESSAGESEND = '[chatmesssage] send';
var CHATMESSAGESENT = '[chatmessage] sent';
var CHATMESSAGESPUSH = '[chatmessage] push';
var CHATMESSAGERECIEVED = '[chatmessage] recieved';
var CHATMESSAGESRESETSTATE = '[chatmessage] reset state';
var ChatMessageAddAction = /** @class */ (function () {
    function ChatMessageAddAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGEADD;
    }
    return ChatMessageAddAction;
}());

var ChatMessageSendAction = /** @class */ (function () {
    function ChatMessageSendAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGESEND;
    }
    return ChatMessageSendAction;
}());

var ChatMessageSentAction = /** @class */ (function () {
    function ChatMessageSentAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGESENT;
    }
    return ChatMessageSentAction;
}());

var ChatMessagePushAction = /** @class */ (function () {
    function ChatMessagePushAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGESPUSH;
    }
    return ChatMessagePushAction;
}());

var ChatMessageRecievedAction = /** @class */ (function () {
    function ChatMessageRecievedAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGERECIEVED;
    }
    return ChatMessageRecievedAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = CHATMESSAGESRESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/chatuser.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/chatuser.actions.ts ***!
  \*********************************************/
/*! exports provided: CHATUSERPUSH, CHATUSERREMOVE, CHATUSERSET, RESETSTATE, ChatUserPushAction, ChatUserRemoveAction, ChatUserSetAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATUSERPUSH", function() { return CHATUSERPUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATUSERREMOVE", function() { return CHATUSERREMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATUSERSET", function() { return CHATUSERSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESETSTATE", function() { return RESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserPushAction", function() { return ChatUserPushAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserRemoveAction", function() { return ChatUserRemoveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserSetAction", function() { return ChatUserSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var CHATUSERPUSH = '[chatuser] push';
var CHATUSERREMOVE = '[chatuser] remove';
var CHATUSERSET = '[chatuser] set';
var RESETSTATE = '[chatuser] reset state';
var ChatUserPushAction = /** @class */ (function () {
    function ChatUserPushAction(payload) {
        this.payload = payload;
        this.type = CHATUSERPUSH;
    }
    return ChatUserPushAction;
}());

var ChatUserRemoveAction = /** @class */ (function () {
    function ChatUserRemoveAction(payload) {
        this.payload = payload;
        this.type = CHATUSERREMOVE;
    }
    return ChatUserRemoveAction;
}());

var ChatUserSetAction = /** @class */ (function () {
    function ChatUserSetAction(payload) {
        this.payload = payload;
        this.type = CHATUSERSET;
    }
    return ChatUserSetAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = RESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/game.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/game.actions.ts ***!
  \*****************************************/
/*! exports provided: GAMERECIEVESTATE, GAMEENDED, RESETSTATE, GameRecieveStateAction, GameEndedAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMERECIEVESTATE", function() { return GAMERECIEVESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMEENDED", function() { return GAMEENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESETSTATE", function() { return RESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRecieveStateAction", function() { return GameRecieveStateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEndedAction", function() { return GameEndedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var GAMERECIEVESTATE = '[game] recieve state';
var GAMEENDED = '[game] ended';
var RESETSTATE = '[game] reset state';
var GameRecieveStateAction = /** @class */ (function () {
    function GameRecieveStateAction(payload) {
        this.payload = payload;
        this.type = GAMERECIEVESTATE;
    }
    return GameRecieveStateAction;
}());

var GameEndedAction = /** @class */ (function () {
    function GameEndedAction(payload) {
        this.payload = payload;
        this.type = GAMEENDED;
    }
    return GameEndedAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = RESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/gamemove.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/gamemove.actions.ts ***!
  \*********************************************/
/*! exports provided: GAMEMOVESEND, GAMEMOVESENT, GameMoveSendAction, GameMoveSentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMEMOVESEND", function() { return GAMEMOVESEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMEMOVESENT", function() { return GAMEMOVESENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMoveSendAction", function() { return GameMoveSendAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMoveSentAction", function() { return GameMoveSentAction; });
var GAMEMOVESEND = '[gamemove] send';
var GAMEMOVESENT = '[gamemove] send';
var GameMoveSendAction = /** @class */ (function () {
    function GameMoveSendAction(payload) {
        this.payload = payload;
        this.type = GAMEMOVESEND;
    }
    return GameMoveSendAction;
}());

var GameMoveSentAction = /** @class */ (function () {
    function GameMoveSentAction(payload) {
        this.payload = payload;
        this.type = GAMEMOVESENT;
    }
    return GameMoveSentAction;
}());



/***/ }),

/***/ "./src/app/actions/invite.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/invite.actions.ts ***!
  \*******************************************/
/*! exports provided: GAMEINVITE, GAMEINVITED, RESETSTATE, GameInviteAction, GameInvitedAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMEINVITE", function() { return GAMEINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMEINVITED", function() { return GAMEINVITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESETSTATE", function() { return RESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInviteAction", function() { return GameInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInvitedAction", function() { return GameInvitedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var GAMEINVITE = '[invite] invite';
var GAMEINVITED = '[invite] invited';
var RESETSTATE = '[invite] reset state';
var GameInviteAction = /** @class */ (function () {
    function GameInviteAction(payload) {
        this.payload = payload;
        this.type = GAMEINVITE;
    }
    return GameInviteAction;
}());

var GameInvitedAction = /** @class */ (function () {
    function GameInvitedAction(payload) {
        this.payload = payload;
        this.type = GAMEINVITED;
    }
    return GameInvitedAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = RESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/invitingplayer.action.ts":
/*!**************************************************!*\
  !*** ./src/app/actions/invitingplayer.action.ts ***!
  \**************************************************/
/*! exports provided: RECIEVEINVITE, DECLINEINVITE, DECLINEDINVITE, ACCEPTINVITE, ACCEPTEDINVITE, RESETSTATE, CONNECTTOGAME, RecieveInviteAction, DeclineInviteAction, DeclinedInviteAction, AcceptInviteAction, AcceptedInviteAction, ConnectToGameAction, ResetStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVEINVITE", function() { return RECIEVEINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLINEINVITE", function() { return DECLINEINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLINEDINVITE", function() { return DECLINEDINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPTINVITE", function() { return ACCEPTINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPTEDINVITE", function() { return ACCEPTEDINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESETSTATE", function() { return RESETSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECTTOGAME", function() { return CONNECTTOGAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieveInviteAction", function() { return RecieveInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclineInviteAction", function() { return DeclineInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclinedInviteAction", function() { return DeclinedInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptInviteAction", function() { return AcceptInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedInviteAction", function() { return AcceptedInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectToGameAction", function() { return ConnectToGameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStateAction", function() { return ResetStateAction; });
var RECIEVEINVITE = '[invitingplayer] recieve invite';
var DECLINEINVITE = '[invitingplayer] decline invite';
var DECLINEDINVITE = '[invitingplayer] declined invite';
var ACCEPTINVITE = '[invitingplayer] accept invite';
var ACCEPTEDINVITE = '[invitingplayer] accepted invite';
var RESETSTATE = '[invitingplayer] reset state';
var CONNECTTOGAME = '[invitingplayer] connect to game';
var RecieveInviteAction = /** @class */ (function () {
    function RecieveInviteAction(payload) {
        this.payload = payload;
        this.type = RECIEVEINVITE;
    }
    return RecieveInviteAction;
}());

var DeclineInviteAction = /** @class */ (function () {
    function DeclineInviteAction(payload) {
        this.payload = payload;
        this.type = DECLINEINVITE;
    }
    return DeclineInviteAction;
}());

var DeclinedInviteAction = /** @class */ (function () {
    function DeclinedInviteAction(payload) {
        this.payload = payload;
        this.type = DECLINEDINVITE;
    }
    return DeclinedInviteAction;
}());

var AcceptInviteAction = /** @class */ (function () {
    function AcceptInviteAction(payload) {
        this.payload = payload;
        this.type = ACCEPTINVITE;
    }
    return AcceptInviteAction;
}());

var AcceptedInviteAction = /** @class */ (function () {
    function AcceptedInviteAction(payload) {
        this.payload = payload;
        this.type = ACCEPTEDINVITE;
    }
    return AcceptedInviteAction;
}());

var ConnectToGameAction = /** @class */ (function () {
    function ConnectToGameAction(payload) {
        this.payload = payload;
        this.type = CONNECTTOGAME;
    }
    return ConnectToGameAction;
}());

var ResetStateAction = /** @class */ (function () {
    function ResetStateAction(payload) {
        this.payload = payload;
        this.type = RESETSTATE;
    }
    return ResetStateAction;
}());



/***/ }),

/***/ "./src/app/actions/player.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/player.actions.ts ***!
  \*******************************************/
/*! exports provided: PLAYERRECIEVEDATA, PLAYERDISCONNECTED, PlayerRecieveDataAction, PlayerDisconnectedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYERRECIEVEDATA", function() { return PLAYERRECIEVEDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYERDISCONNECTED", function() { return PLAYERDISCONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRecieveDataAction", function() { return PlayerRecieveDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDisconnectedAction", function() { return PlayerDisconnectedAction; });
var PLAYERRECIEVEDATA = '[player] recieve data';
var PLAYERDISCONNECTED = '[player] disconnected';
var PlayerRecieveDataAction = /** @class */ (function () {
    function PlayerRecieveDataAction(payload) {
        this.payload = payload;
        this.type = PLAYERRECIEVEDATA;
    }
    return PlayerRecieveDataAction;
}());

var PlayerDisconnectedAction = /** @class */ (function () {
    function PlayerDisconnectedAction(payload) {
        this.payload = payload;
        this.type = PLAYERDISCONNECTED;
    }
    return PlayerDisconnectedAction;
}());



/***/ }),

/***/ "./src/app/actions/title.actions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/title.actions.ts ***!
  \******************************************/
/*! exports provided: TITLESET, TITLEGET, TitleSetAction, TitleGetAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLESET", function() { return TITLESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLEGET", function() { return TITLEGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSetAction", function() { return TitleSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleGetAction", function() { return TitleGetAction; });
var TITLESET = '[title] set';
var TITLEGET = '[title] get';
var TitleSetAction = /** @class */ (function () {
    function TitleSetAction(payload) {
        this.payload = payload;
        this.type = TITLESET;
    }
    return TitleSetAction;
}());

var TitleGetAction = /** @class */ (function () {
    function TitleGetAction(payload) {
        this.payload = payload;
        this.type = TITLEGET;
    }
    return TitleGetAction;
}());



/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: USERCHANGE, USERUPDATE, USERWRITE, USERCHANGED, USERCHATCONNECT, USERHUBCONNECT, USERHUBCONNECTED, USERHUBDISCONNECT, USERHUBDISCONNECTED, UserHubConnectAction, UserHubConnectedAction, UserHubDisconnectAction, UserHubDisconnectedAction, UserChangeAction, UserUpdateAction, UserWriteAction, UserChangedAction, UserChatConnectAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERCHANGE", function() { return USERCHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERUPDATE", function() { return USERUPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERWRITE", function() { return USERWRITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERCHANGED", function() { return USERCHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERCHATCONNECT", function() { return USERCHATCONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERHUBCONNECT", function() { return USERHUBCONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERHUBCONNECTED", function() { return USERHUBCONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERHUBDISCONNECT", function() { return USERHUBDISCONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERHUBDISCONNECTED", function() { return USERHUBDISCONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHubConnectAction", function() { return UserHubConnectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHubConnectedAction", function() { return UserHubConnectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHubDisconnectAction", function() { return UserHubDisconnectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHubDisconnectedAction", function() { return UserHubDisconnectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangeAction", function() { return UserChangeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateAction", function() { return UserUpdateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWriteAction", function() { return UserWriteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangedAction", function() { return UserChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatConnectAction", function() { return UserChatConnectAction; });
var USERCHANGE = '[user] change';
var USERUPDATE = '[user] update';
var USERWRITE = '[user] write';
var USERCHANGED = '[user] changed';
var USERCHATCONNECT = '[user] connect to chat';
var USERHUBCONNECT = '[hub] connect';
var USERHUBCONNECTED = '[hub] connected';
var USERHUBDISCONNECT = '[hub] disconnect';
var USERHUBDISCONNECTED = '[hub] disconnected';
var UserHubConnectAction = /** @class */ (function () {
    function UserHubConnectAction(payload) {
        this.payload = payload;
        this.type = USERHUBCONNECT;
    }
    return UserHubConnectAction;
}());

var UserHubConnectedAction = /** @class */ (function () {
    function UserHubConnectedAction(payload) {
        this.payload = payload;
        this.type = USERHUBCONNECTED;
    }
    return UserHubConnectedAction;
}());

var UserHubDisconnectAction = /** @class */ (function () {
    function UserHubDisconnectAction(payload) {
        this.payload = payload;
        this.type = USERHUBDISCONNECT;
    }
    return UserHubDisconnectAction;
}());

var UserHubDisconnectedAction = /** @class */ (function () {
    function UserHubDisconnectedAction(payload) {
        this.payload = payload;
        this.type = USERHUBDISCONNECTED;
    }
    return UserHubDisconnectedAction;
}());

var UserChangeAction = /** @class */ (function () {
    function UserChangeAction(payload) {
        this.payload = payload;
        this.type = USERCHANGE;
    }
    return UserChangeAction;
}());

var UserUpdateAction = /** @class */ (function () {
    function UserUpdateAction(payload) {
        this.payload = payload;
        this.type = USERUPDATE;
    }
    return UserUpdateAction;
}());

var UserWriteAction = /** @class */ (function () {
    function UserWriteAction(payload) {
        this.payload = payload;
        this.type = USERWRITE;
    }
    return UserWriteAction;
}());

var UserChangedAction = /** @class */ (function () {
    function UserChangedAction(payload) {
        this.payload = payload;
        this.type = USERCHANGED;
    }
    return UserChangedAction;
}());

var UserChatConnectAction = /** @class */ (function () {
    function UserChatConnectAction(payload) {
        this.payload = payload;
        this.type = USERCHATCONNECT;
    }
    return UserChatConnectAction;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <app-account></app-account>\n  <h1>\n    Welcome to {{ _title }}!\n  </h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_title_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/title.actions */ "./src/app/actions/title.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._title = 'Tic-Tac-Toe Game';
        this.store.dispatch(new _actions_title_actions__WEBPACK_IMPORTED_MODULE_2__["TitleSetAction"](this._title));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/reducers */ "./src/app/reducers/reducers.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_account_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account/profile.component */ "./src/app/components/account/profile.component.ts");
/* harmony import */ var _components_xogame_xoroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/xogame/xoroom.component */ "./src/app/components/xogame/xoroom.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var _effects_account_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/account.effects */ "./src/app/effects/account.effects.ts");
/* harmony import */ var _effects_chat_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/chat.effects */ "./src/app/effects/chat.effects.ts");
/* harmony import */ var _effects_game_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/game.effects */ "./src/app/effects/game.effects.ts");
/* harmony import */ var _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/user.resolver */ "./src/app/resolvers/user.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'ViewProfile', component: _components_account_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], resolve: { user: _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_17__["UserResolver"] } },
    { path: 'tic-tac-toe-room', component: _components_xogame_xoroom_component__WEBPACK_IMPORTED_MODULE_10__["XORoomComponent"], resolve: { user: _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_17__["UserResolver"] } },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_account_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_xogame_xoroom_component__WEBPACK_IMPORTED_MODULE_10__["XORoomComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_reducers_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                    _effects_account_effects__WEBPACK_IMPORTED_MODULE_14__["AccountEffects"],
                    _effects_chat_effects__WEBPACK_IMPORTED_MODULE_15__["ChatEffects"],
                    _effects_game_effects__WEBPACK_IMPORTED_MODULE_16__["GameEffects"]
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [
                _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"],
                _services_signalr_service__WEBPACK_IMPORTED_MODULE_13__["SignalRService"],
                _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_17__["UserResolver"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-default navbar-static\" id=\"navbar\">\r\n        <div class=\"navbar-header\">\r\n            <a routerLink=\"\" class=\"navbar-brand\">\r\n                {{title$ | async}}\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li id=\"account-menu\" class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" id=\"drop\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"user$ | async; let user\">\r\n                    {{user.name}}\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"drop\">\r\n                        <li>\r\n                            <a routerLink=\"/ViewProfile\">View Profile</a>\r\n                        </li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li>\r\n                            <a href=\"/Account/Logout\">LogOut</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/app/actions/user.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(store) {
        this.store = store;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserUpdateAction"]());
        this.user$ = this.store.select('user');
        this.title$ = this.store.select('title');
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/components/account/account.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/account/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/account/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"edit\" class=\"text-left\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"surname\">Surname</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.surname\" name=\"surname\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"age\">Age</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.age\" name=\"age\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"!edit\" class=\"text-left\">\r\n    <div>\r\n        <span>Username: </span> {{user?.username}}\r\n    </div>\r\n    <div>\r\n        <span>Name: </span> {{user?.name}}\r\n    </div>\r\n    <div>\r\n        <span>Surname: </span> {{user?.surname}}\r\n    </div>\r\n    <div>\r\n        <span>Age: </span> {{user?.age}}\r\n    </div>\r\n    <button (click)=\"onEdit()\">Edit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/account/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store, route) {
        this.store = store;
        this.route = route;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ProfileComponent.prototype.onSubmit = function () {
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserChangeAction"](this.user));
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserWriteAction"](this.user));
        this.edit = false;
    };
    ProfileComponent.prototype.onEdit = function () {
        this.edit = true;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data.user;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/account/profile.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/xogame/xoroom.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/xogame/xoroom.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\r\n  border: 1px solid black;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/xogame/xoroom.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/xogame/xoroom.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Invite Modal -->\r\n<div class=\"modal fade\" #modal>\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <form>\r\n              <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  <header class=\"font-12 bold\">Новое приглашение!</header>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                {{invitingPlayer?.username}} приглашает поиграть!\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"acceptInvite()\">Принять</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"declineInvite()\">Отказаться</button>\r\n              </div>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- Invite Modal -->\r\n\r\n<!-- Message Modal -->\r\n<div class=\"modal fade\" #messageModal>\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <form>\r\n              <div class=\"modal-header bg-warning\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  <header class=\"font-12 bold\">Новое сообщение!</header>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                {{alertMessage?.message}}\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">close</button>\r\n              </div>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- Message Modal -->\r\n\r\n<div class=\"chat-container\" *ngIf=\"!isGame\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"panel panel-default text-left\" *ngFor=\"let msg of (chatMessages$ | async)\">\r\n          <div class=\"panel-heading\">{{msg.name | titlecase}}<span style=\"font-size: 12px\">@{{msg.username}}</span></div>\r\n          <div class=\"panel-body\">\r\n            {{msg.message}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let usr of (chatUsers$ | async)\">\r\n            <span class=\"fake-link\" (click)=\"sendInvite(usr.id)\">{{usr.username}}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <form class=\"form-inline\" (ngSubmit)=\"sendMessage()\">\r\n      <div class=\"container text-left\">\r\n          <div class=\"row\" style=\"background:#ddceab;\">\r\n              <div class=\"col-sm py-2\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"chatMessage.message\"/>\r\n                  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"game-container text-center\" *ngIf=\"isGame\">\r\n  <h1>{{gameState?.currentUsername}} ходит!</h1>\r\n  <table>\r\n    <tr>\r\n        <td (click)=\"makeMove(0)\">{{gameState?.deck[0]}}</td>\r\n        <td (click)=\"makeMove(1)\">{{gameState?.deck[1]}}</td>\r\n        <td (click)=\"makeMove(2)\">{{gameState?.deck[2]}}</td>\r\n    </tr>\r\n    <tr>\r\n        <td (click)=\"makeMove(3)\">{{gameState?.deck[3]}}</td>\r\n        <td (click)=\"makeMove(4)\">{{gameState?.deck[4]}}</td>\r\n        <td (click)=\"makeMove(5)\">{{gameState?.deck[5]}}</td>\r\n    </tr>\r\n    <tr>\r\n        <td (click)=\"makeMove(6)\">{{gameState?.deck[6]}}</td>\r\n        <td (click)=\"makeMove(7)\">{{gameState?.deck[7]}}</td>\r\n        <td (click)=\"makeMove(8)\">{{gameState?.deck[8]}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/xogame/xoroom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/xogame/xoroom.component.ts ***!
  \*******************************************************/
/*! exports provided: XORoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XORoomComponent", function() { return XORoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/chatmessage.model */ "./src/app/models/chatmessage.model.ts");
/* harmony import */ var _models_invite_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/invite.model */ "./src/app/models/invite.model.ts");
/* harmony import */ var _models_gamemove_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/gamemove.model */ "./src/app/models/gamemove.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/chatmessage.actions */ "./src/app/actions/chatmessage.actions.ts");
/* harmony import */ var _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/chatuser.actions */ "./src/app/actions/chatuser.actions.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _actions_invite_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/invite.actions */ "./src/app/actions/invite.actions.ts");
/* harmony import */ var _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/invitingplayer.action */ "./src/app/actions/invitingplayer.action.ts");
/* harmony import */ var _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/alretmessage.action */ "./src/app/actions/alretmessage.action.ts");
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/player.actions */ "./src/app/actions/player.actions.ts");
/* harmony import */ var _actions_game_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/game.actions */ "./src/app/actions/game.actions.ts");
/* harmony import */ var _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/gamemove.actions */ "./src/app/actions/gamemove.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var XORoomComponent = /** @class */ (function () {
    function XORoomComponent(dispatcher, store, cdr, route) {
        this.dispatcher = dispatcher;
        this.store = store;
        this.cdr = cdr;
        this.route = route;
        this.chatMessage = new _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_1__["ChatMessage"]();
        this.isGame = false;
    }
    // modal приглашения
    XORoomComponent.prototype.showModal = function () {
        if (this.invitingPlayer != null && this.invitingPlayer.id.length > 0) {
            $(this.modal.nativeElement).modal('show');
        }
    };
    // modal сообщений сервера
    XORoomComponent.prototype.showAlertModal = function () {
        if (this.alertMessage != null && this.alertMessage.message.length > 0) {
            $(this.messageModal.nativeElement).modal('show');
        }
    };
    // Метод отправки сообщения в чате
    XORoomComponent.prototype.sendMessage = function () {
        this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_5__["ChatMessageSendAction"](this.chatMessage));
        // Устанавливаем пустое сообщение после отправки, так как связь двусторонняя
        this.chatMessage.message = '';
    };
    // Метод приглашения в игру
    XORoomComponent.prototype.sendInvite = function (targetId) {
        this.store.dispatch(new _actions_invite_actions__WEBPACK_IMPORTED_MODULE_8__["GameInviteAction"](new _models_invite_model__WEBPACK_IMPORTED_MODULE_2__["Invite"](this.chatUser.id, targetId)));
    };
    // Метод отказа
    XORoomComponent.prototype.declineInvite = function () {
        this.store.dispatch(new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_9__["DeclineInviteAction"](this.invitingPlayer));
    };
    // Метод принятия приглашения
    XORoomComponent.prototype.acceptInvite = function () {
        this.store.dispatch(new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_9__["AcceptInviteAction"](this.invitingPlayer));
    };
    // Метод хода
    XORoomComponent.prototype.makeMove = function (cell) {
        // Валидация игрока на клиенте, еще одна будет на сервере
        if (this.player != null && this.player.id === this.gameState.currentId) {
            this.store.dispatch(new _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_13__["GameMoveSendAction"](new _models_gamemove_model__WEBPACK_IMPORTED_MODULE_3__["GameMove"](this.gameState.id, this.player.id, cell)));
        }
    };
    XORoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Полчуаем пользователя из резолвера и устанавливаем свойства сообщения
        this.user = this.route.snapshot.data.user;
        this.chatMessage.name = this.user.name;
        this.chatMessage.username = this.user.username;
        // Подключаемся к хабу
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["UserHubConnectAction"](this.user));
        // Создаем observable сообщений чата
        this.chatMessages$ = this.store.select('chatMessages');
        // Подписываемся на модель пользователя чата
        this.chatUserSub = this.store.select('chatUser').subscribe(function (chatuser) {
            _this.chatUser = chatuser;
        });
        // Создаем observable пользователей чата
        this.chatUsers$ = this.store.select('chatUsers');
        // Подписываемся на модель игрока, который будет приглашать
        this.invitingPlayerSub = this.store.select('invitingPlayer').subscribe(function (invitingPlayer) {
            _this.invitingPlayer = invitingPlayer;
            _this.showModal();
        });
        // Подписываемся на сообщения сервера
        this.alertMessageSub = this.store.select('alertMessage').subscribe(function (msg) {
            _this.alertMessage = msg;
            _this.showAlertModal();
        });
        // Подписываемся на модель игры
        this.gameStateSub = this.store.select('game').subscribe(function (game) {
            _this.gameState = game;
        });
        // Подписываемся на модель игрока
        this.playerSub = this.store.select('player').subscribe(function (player) { return _this.player = player; });
        // Подписываемся на dispatcher для перехвата события получения данных об игроке,
        // чтобы начать игру
        this.isGameSub = this.dispatcher.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["filter"])(function (action) { return action.type === _actions_player_actions__WEBPACK_IMPORTED_MODULE_11__["PLAYERRECIEVEDATA"]; }))
            .subscribe(function () { return _this.isGame = true; });
        // Подписываемся на dispatcher для перехвата события окончания игры
        this.gameEndedSub = this.dispatcher.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["filter"])(function (action) { return action.type === _actions_game_actions__WEBPACK_IMPORTED_MODULE_12__["GAMEENDED"]; }))
            .subscribe(function () {
            _this.isGame = false;
            _this.store.dispatch(new _actions_game_actions__WEBPACK_IMPORTED_MODULE_12__["ResetStateAction"]());
        });
    };
    XORoomComponent.prototype.ngOnDestroy = function () {
        // отписываемся от стора
        this.chatUserSub.unsubscribe();
        this.invitingPlayerSub.unsubscribe();
        this.alertMessageSub.unsubscribe();
        this.playerSub.unsubscribe();
        this.gameStateSub.unsubscribe();
        this.isGameSub.unsubscribe();
        this.gameEndedSub.unsubscribe();
        // отключаемся от хаба
        this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["UserHubDisconnectAction"]());
        // сбрасываем состояния
        this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_5__["ResetStateAction"]());
        this.store.dispatch(new _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_6__["ResetStateAction"]());
        this.store.dispatch(new _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_10__["ResetStateAction"]());
        this.store.dispatch(new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_9__["ResetStateAction"]());
        this.store.dispatch(new _actions_game_actions__WEBPACK_IMPORTED_MODULE_12__["ResetStateAction"]());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], XORoomComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], XORoomComponent.prototype, "messageModal", void 0);
    XORoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-xoroom',
            template: __webpack_require__(/*! ./xoroom.component.html */ "./src/app/components/xogame/xoroom.component.html"),
            styles: [__webpack_require__(/*! ./xoroom.component.css */ "./src/app/components/xogame/xoroom.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["ReducerManagerDispatcher"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]])
    ], XORoomComponent);
    return XORoomComponent;
}());



/***/ }),

/***/ "./src/app/effects/account.effects.ts":
/*!********************************************!*\
  !*** ./src/app/effects/account.effects.ts ***!
  \********************************************/
/*! exports provided: AccountEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEffects", function() { return AccountEffects; });
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountEffects = /** @class */ (function () {
    function AccountEffects(accountService, actions$) {
        var _this = this;
        this.accountService = accountService;
        this.actions$ = actions$;
        this.update$ = this.actions$
            .ofType(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["USERUPDATE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.accountService
                .getData()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserChangeAction"](data); }));
        }));
        this.write$ = this.actions$
            .ofType(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["USERWRITE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) { return _this.accountService.updateData(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserChangedAction"](); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AccountEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AccountEffects.prototype, "write$", void 0);
    AccountEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], AccountEffects);
    return AccountEffects;
}());



/***/ }),

/***/ "./src/app/effects/chat.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/chat.effects.ts ***!
  \*****************************************/
/*! exports provided: ChatEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEffects", function() { return ChatEffects; });
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/chatmessage.actions */ "./src/app/actions/chatmessage.actions.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatEffects = /** @class */ (function () {
    function ChatEffects(signalRService, actions$) {
        var _this = this;
        this.signalRService = signalRService;
        this.actions$ = actions$;
        this.send = this.actions$
            .ofType(_actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_4__["CHATMESSAGESEND"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.signalRService.sendMessage(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                return new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_4__["ChatMessageSentAction"]();
            }));
        }));
        // @Effect()
        // recieve: Observable<Action> = this.actions$
        //   .ofType(ChatActions.CHATMESSAGERECIEVED)
        //   .pipe(map((action: ChatActions.ChatMessageRecievedAction) =>
        //     new ChatActions.ChatMessagePushAction(action.payload)));
        this.connectToHub = this.actions$
            .ofType(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["USERHUBCONNECT"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.signalRService.startConnection(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserHubConnectedAction"]();
            }));
        }));
        this.disconnectFromHub = this.actions$
            .ofType(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["USERHUBDISCONNECT"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            _this.signalRService.stopConnection();
            return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserHubDisconnectedAction"]();
        }));
        this.connect = this.actions$
            .ofType(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["USERCHATCONNECT"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.signalRService.connect(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                return new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_4__["ChatMessageSentAction"]();
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatEffects.prototype, "send", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatEffects.prototype, "connectToHub", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatEffects.prototype, "disconnectFromHub", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatEffects.prototype, "connect", void 0);
    ChatEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_signalr_service__WEBPACK_IMPORTED_MODULE_0__["SignalRService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], ChatEffects);
    return ChatEffects;
}());



/***/ }),

/***/ "./src/app/effects/game.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/game.effects.ts ***!
  \*****************************************/
/*! exports provided: GameEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEffects", function() { return GameEffects; });
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_invite_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/invite.actions */ "./src/app/actions/invite.actions.ts");
/* harmony import */ var _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/invitingplayer.action */ "./src/app/actions/invitingplayer.action.ts");
/* harmony import */ var _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/gamemove.actions */ "./src/app/actions/gamemove.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GameEffects = /** @class */ (function () {
    function GameEffects(signalRService, actions$) {
        var _this = this;
        this.signalRService = signalRService;
        this.actions$ = actions$;
        this.invite = this.actions$
            .ofType(_actions_invite_actions__WEBPACK_IMPORTED_MODULE_5__["GAMEINVITE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.signalRService.inviteUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new _actions_invite_actions__WEBPACK_IMPORTED_MODULE_5__["GameInvitedAction"]();
            }));
        }));
        this.declineinvite = this.actions$
            .ofType(_actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_6__["DECLINEINVITE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.signalRService.declineInvite(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_6__["DeclinedInviteAction"]();
            }));
        }));
        this.acceptinvite = this.actions$
            .ofType(_actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_6__["ACCEPTINVITE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.signalRService.acceptInvite(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_6__["AcceptedInviteAction"]();
            }));
        }));
        this.gameMoveSend = this.actions$
            .ofType(_actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_7__["GAMEMOVESEND"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.signalRService.gameDoMove(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_7__["GameMoveSentAction"]();
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GameEffects.prototype, "invite", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GameEffects.prototype, "declineinvite", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GameEffects.prototype, "acceptinvite", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GameEffects.prototype, "gameMoveSend", void 0);
    GameEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_signalr_service__WEBPACK_IMPORTED_MODULE_0__["SignalRService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], GameEffects);
    return GameEffects;
}());



/***/ }),

/***/ "./src/app/models/alertmessage.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/alertmessage.model.ts ***!
  \**********************************************/
/*! exports provided: AlertMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
var AlertMessage = /** @class */ (function () {
    function AlertMessage(message) {
        if (message === void 0) { message = ''; }
        this.message = message;
    }
    return AlertMessage;
}());



/***/ }),

/***/ "./src/app/models/chatmessage.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/chatmessage.model.ts ***!
  \*********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage(name, username, message) {
        if (name === void 0) { name = ''; }
        if (username === void 0) { username = ''; }
        if (message === void 0) { message = ''; }
        this.name = name;
        this.username = username;
        this.message = message;
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/chatuser.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/chatuser.model.ts ***!
  \******************************************/
/*! exports provided: ChatUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUser", function() { return ChatUser; });
var ChatUser = /** @class */ (function () {
    function ChatUser(id, name, username) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (username === void 0) { username = ''; }
        this.id = id;
        this.name = name;
        this.username = username;
    }
    return ChatUser;
}());



/***/ }),

/***/ "./src/app/models/game.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/game.model.ts ***!
  \**************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(id, currenId, currentUsername, deck) {
        if (id === void 0) { id = 0; }
        if (currenId === void 0) { currenId = ''; }
        if (currentUsername === void 0) { currentUsername = ''; }
        if (deck === void 0) { deck = []; }
        this.id = id;
        this.currentId = currenId;
        this.currentUsername = currentUsername;
        this.deck = deck;
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/models/gamemove.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/gamemove.model.ts ***!
  \******************************************/
/*! exports provided: GameMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMove", function() { return GameMove; });
var GameMove = /** @class */ (function () {
    function GameMove(gameId, playerId, cellIndex) {
        this.gameId = gameId;
        this.playerId = playerId;
        this.cellIndex = cellIndex;
    }
    return GameMove;
}());



/***/ }),

/***/ "./src/app/models/invite.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/invite.model.ts ***!
  \****************************************/
/*! exports provided: Invite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invite", function() { return Invite; });
var Invite = /** @class */ (function () {
    function Invite(callerId, targetId) {
        if (callerId === void 0) { callerId = ''; }
        if (targetId === void 0) { targetId = ''; }
        this.callerId = callerId;
        this.targetId = targetId;
    }
    return Invite;
}());



/***/ }),

/***/ "./src/app/models/invitingplayer.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/invitingplayer.model.ts ***!
  \************************************************/
/*! exports provided: InvitingPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitingPlayer", function() { return InvitingPlayer; });
var InvitingPlayer = /** @class */ (function () {
    function InvitingPlayer(id, username) {
        if (id === void 0) { id = ''; }
        if (username === void 0) { username = ''; }
        this.id = id;
        this.username = username;
    }
    return InvitingPlayer;
}());



/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(id, username, pType) {
        if (id === void 0) { id = ''; }
        if (username === void 0) { username = ''; }
        if (pType === void 0) { pType = ''; }
        this.id = id;
        this.username = username;
        this.pType = pType;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, surname, age, username) {
        if (name === void 0) { name = ''; }
        if (surname === void 0) { surname = ''; }
        if (age === void 0) { age = null; }
        if (username === void 0) { username = ''; }
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.username = username;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/reducers/alertmessage.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/reducers/alertmessage.reducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/alretmessage.action */ "./src/app/actions/alretmessage.action.ts");
/* harmony import */ var _models_alertmessage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/alertmessage.model */ "./src/app/models/alertmessage.model.ts");


var initialState = new _models_alertmessage_model__WEBPACK_IMPORTED_MODULE_1__["AlertMessage"]();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_0__["ALERTMESSAGESEND"]:
            return action.payload;
        case _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_0__["RESETSTATE"]:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/chatmessage.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/reducers/chatmessage.reducer.ts ***!
  \*************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chatmessage.actions */ "./src/app/actions/chatmessage.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_0__["CHATMESSAGERECIEVED"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/chatmessages.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/reducers/chatmessages.reducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chatmessage.actions */ "./src/app/actions/chatmessage.actions.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_0__["CHATMESSAGESPUSH"]:
            var messages = state.length ? state : [];
            return messages.concat([action.payload]);
        case _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_0__["CHATMESSAGESRESETSTATE"]:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/chatuser.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/chatuser.reducer.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chatuser.actions */ "./src/app/actions/chatuser.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__["CHATUSERSET"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/chatusers.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/chatusers.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chatuser.actions */ "./src/app/actions/chatuser.actions.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__["CHATUSERPUSH"]:
            var users = state.length ? state : [];
            if (!users.some(function (x) { return x.id === action.payload.id; })) {
                return users.concat([action.payload]);
            }
            else {
                return state;
            }
        case _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__["CHATUSERREMOVE"]:
            var chatUsers = state.length ? state : [];
            var index = chatUsers.findIndex(function (x) { return x.id === action.payload.id; });
            if (index > -1) {
                chatUsers.splice(index, 1);
                return chatUsers;
            }
            else {
                return state;
            }
        case _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_0__["RESETSTATE"]:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/game.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/game.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/game.model */ "./src/app/models/game.model.ts");
/* harmony import */ var _actions_game_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/game.actions */ "./src/app/actions/game.actions.ts");


var initialState = new _models_game_model__WEBPACK_IMPORTED_MODULE_0__["Game"]();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_game_actions__WEBPACK_IMPORTED_MODULE_1__["GAMERECIEVESTATE"]:
            return action.payload;
        case _actions_game_actions__WEBPACK_IMPORTED_MODULE_1__["RESETSTATE"]:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/gamemove.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/gamemove.reducer.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/gamemove.actions */ "./src/app/actions/gamemove.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_gamemove_actions__WEBPACK_IMPORTED_MODULE_0__["GAMEMOVESEND"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/invitingplayer.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/reducers/invitingplayer.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/invitingplayer.action */ "./src/app/actions/invitingplayer.action.ts");
/* harmony import */ var _models_invitingplayer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/invitingplayer.model */ "./src/app/models/invitingplayer.model.ts");


var initialState = new _models_invitingplayer_model__WEBPACK_IMPORTED_MODULE_1__["InvitingPlayer"]();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_0__["RECIEVEINVITE"]:
            return action.payload;
        case _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_0__["DECLINEINVITE"]:
            return action.payload;
        case _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_0__["ACCEPTINVITE"]:
            return action.payload;
        case _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_0__["RESETSTATE"]:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/player.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/player.reducer.ts ***!
  \********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/player.actions */ "./src/app/actions/player.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_player_actions__WEBPACK_IMPORTED_MODULE_0__["PLAYERRECIEVEDATA"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/reducers.ts":
/*!**************************************!*\
  !*** ./src/app/reducers/reducers.ts ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");
/* harmony import */ var _chatmessages_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatmessages.reducer */ "./src/app/reducers/chatmessages.reducer.ts");
/* harmony import */ var _chatmessage_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatmessage.reducer */ "./src/app/reducers/chatmessage.reducer.ts");
/* harmony import */ var _title_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.reducer */ "./src/app/reducers/title.reducer.ts");
/* harmony import */ var _chatusers_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatusers.reducer */ "./src/app/reducers/chatusers.reducer.ts");
/* harmony import */ var _chatuser_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatuser.reducer */ "./src/app/reducers/chatuser.reducer.ts");
/* harmony import */ var _invitingplayer_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitingplayer.reducer */ "./src/app/reducers/invitingplayer.reducer.ts");
/* harmony import */ var _alertmessage_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alertmessage.reducer */ "./src/app/reducers/alertmessage.reducer.ts");
/* harmony import */ var _player_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player.reducer */ "./src/app/reducers/player.reducer.ts");
/* harmony import */ var _game_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game.reducer */ "./src/app/reducers/game.reducer.ts");
/* harmony import */ var _gamemove_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gamemove.reducer */ "./src/app/reducers/gamemove.reducer.ts");











var reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    chatMessages: _chatmessages_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    chatMessage: _chatmessage_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    title: _title_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    chatUsers: _chatusers_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    chatUser: _chatuser_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    invitingPlayer: _invitingplayer_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    alertMessage: _alertmessage_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    player: _player_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"],
    game: _game_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"],
    gameMove: _gamemove_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"],
};


/***/ }),

/***/ "./src/app/reducers/title.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/title.reducer.ts ***!
  \*******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_title_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/title.actions */ "./src/app/actions/title.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_title_actions__WEBPACK_IMPORTED_MODULE_0__["TITLEGET"]:
            return action.payload;
        case _actions_title_actions__WEBPACK_IMPORTED_MODULE_0__["TITLESET"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["USERCHANGE"]:
            return action.payload;
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["USERWRITE"]:
            return action.payload;
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["USERCHATCONNECT"]:
            return action.payload;
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["USERHUBCONNECT"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/resolvers/user.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/user.resolver.ts ***!
  \********************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolver = /** @class */ (function () {
    function UserResolver(store) {
        this.store = store;
    }
    UserResolver.prototype.resolve = function () {
        var _this = this;
        this.store.select('user').subscribe(function (user) {
            if (!user) {
                _this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserUpdateAction"]());
            }
        });
        return this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const URL = '/mock/account.json';
var URL = '/Account/Find';
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getData = function () {
        return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](data.name, data.surname, data.age, data.username);
        }));
    };
    AccountService.prototype.updateData = function (user) {
        return this.http.post('/Account/ModifyPlayer', user);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/signalr.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/signalr.service.ts ***!
  \*********************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/chatmessage.actions */ "./src/app/actions/chatmessage.actions.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/chatuser.actions */ "./src/app/actions/chatuser.actions.ts");
/* harmony import */ var _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/invitingplayer.action */ "./src/app/actions/invitingplayer.action.ts");
/* harmony import */ var _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/alretmessage.action */ "./src/app/actions/alretmessage.action.ts");
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/player.actions */ "./src/app/actions/player.actions.ts");
/* harmony import */ var _actions_game_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/game.actions */ "./src/app/actions/game.actions.ts");
/* harmony import */ var _models_invitingplayer_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/invitingplayer.model */ "./src/app/models/invitingplayer.model.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/game.model */ "./src/app/models/game.model.ts");
/* harmony import */ var _models_alertmessage_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/alertmessage.model */ "./src/app/models/alertmessage.model.ts");
/* harmony import */ var _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/chatmessage.model */ "./src/app/models/chatmessage.model.ts");
/* harmony import */ var _models_chatuser_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/chatuser.model */ "./src/app/models/chatuser.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SignalRService = /** @class */ (function () {
    function SignalRService(store) {
        this.store = store;
        this.isConnected = false;
        this.createConnection();
        this.registerOnServerEvents();
    }
    SignalRService.prototype.createConnection = function () {
        this.connection = $.hubConnection('/signalr');
        this.proxy = this.connection.createHubProxy('XORoomHub');
    };
    SignalRService.prototype.startConnection = function (user) {
        var _this = this;
        return this.connection.start().done(function (data) {
            console.log('Connected to Processing Hub');
            _this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserChatConnectAction"](user));
        }).catch(function (error) {
            console.log('Hub error -> ' + error);
            setTimeout(function () {
                return _this.startConnection(user);
            }, 5000);
        });
    };
    SignalRService.prototype.stopConnection = function () {
        this.connection.stop();
    };
    // Регистрация серверных евентов
    SignalRService.prototype.registerOnServerEvents = function () {
        // Здесь связь идет напрямую с AppState, а не через эффекты, потому что если добавить эффекты, то мы получим абсолютно
        // идентичный результат, только с промежуточным action, т.е передадим payload не сразу в стор, а сначала вызовем action,
        // которому передадим payload, который вызовет эффект, который вызовет action,
        // которому передадим копию того же payload, и только потом payload попадет в стор.
        // Я считаю, что здесь не нужно использовать эффекты, но могу ошибаться.
        var _this = this;
        this.proxy.on('RecieveChatMessage', function (name, username, message) {
            _this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePushAction"](new _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_13__["ChatMessage"](name, username, message)));
        });
        this.proxy.on('OnConnected', function (id, name, username, users) {
            _this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePushAction"](new _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_13__["ChatMessage"]('CHAT', username, 'Hello ' + username + '!')));
            // устанавливаем только id, остальные поля оставляем пустыми, так как они не понадобятся
            _this.store.dispatch(new _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_4__["ChatUserSetAction"](new _models_chatuser_model__WEBPACK_IMPORTED_MODULE_14__["ChatUser"](id)));
            users.forEach(function (element) {
                _this.store.dispatch(new _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_4__["ChatUserPushAction"](new _models_chatuser_model__WEBPACK_IMPORTED_MODULE_14__["ChatUser"](element.Id, element.Name, element.Username)));
                console.log(element);
            });
        });
        this.proxy.on('OnNewUserConnected', function (id, name, username) {
            _this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePushAction"](new _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_13__["ChatMessage"]('CHAT', username, username + ' connected!')));
            _this.store.dispatch(new _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_4__["ChatUserPushAction"](new _models_chatuser_model__WEBPACK_IMPORTED_MODULE_14__["ChatUser"](id, name, username)));
        });
        this.proxy.on('OnUserDisconnected', function (id, name, username) {
            console.log(username + ' disconnected recieved');
            _this.store.dispatch(new _actions_chatmessage_actions__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePushAction"](new _models_chatmessage_model__WEBPACK_IMPORTED_MODULE_13__["ChatMessage"]('CHAT', username, username + ' disconnected!')));
            _this.store.dispatch(new _actions_chatuser_actions__WEBPACK_IMPORTED_MODULE_4__["ChatUserRemoveAction"](new _models_chatuser_model__WEBPACK_IMPORTED_MODULE_14__["ChatUser"](id, name, username)));
        });
        this.proxy.on('OnInvite', function (callerId, callerUsername) {
            console.log(callerUsername + ' invited');
            _this.store.dispatch(new _actions_invitingplayer_action__WEBPACK_IMPORTED_MODULE_5__["RecieveInviteAction"](new _models_invitingplayer_model__WEBPACK_IMPORTED_MODULE_9__["InvitingPlayer"](callerId, callerUsername)));
        });
        this.proxy.on('OnAlert', function (message) {
            _this.store.dispatch(new _actions_alretmessage_action__WEBPACK_IMPORTED_MODULE_6__["AlertMessageSendAction"](new _models_alertmessage_model__WEBPACK_IMPORTED_MODULE_12__["AlertMessage"](message)));
        });
        this.proxy.on('ConnectToGame', function (id, username, ptype) {
            _this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_7__["PlayerRecieveDataAction"](new _models_player_model__WEBPACK_IMPORTED_MODULE_10__["Player"](id, username, ptype)));
        });
        this.proxy.on('OnSetGameState', function (gameid, cuirrentId, currentUsername, deck) {
            _this.store.dispatch(new _actions_game_actions__WEBPACK_IMPORTED_MODULE_8__["GameRecieveStateAction"](new _models_game_model__WEBPACK_IMPORTED_MODULE_11__["Game"](gameid, cuirrentId, currentUsername, deck)));
        });
        this.proxy.on('OnGameEnded', function () {
            _this.store.dispatch(new _actions_game_actions__WEBPACK_IMPORTED_MODULE_8__["GameEndedAction"]());
        });
    };
    // Далее идут методы, вызывающие методы на сервере. Для них уже используются эффекты.
    // Отправка сообщения в чат
    SignalRService.prototype.sendMessage = function (message) {
        return this.proxy.invoke('SendChatMessage', message.name, message.username, message.message)
            .catch(function (error) {
            console.log('SendChatMessage error -> ' + error);
        });
    };
    // Приглашение на игру
    SignalRService.prototype.inviteUser = function (invite) {
        return this.proxy.invoke('InviteUser', invite.callerId, invite.targetId)
            .catch(function (error) {
            console.log('Invite error -> ' + error);
        });
    };
    // Отказ от приглашения
    SignalRService.prototype.declineInvite = function (invitingPlayer) {
        return this.proxy.invoke('DeclineInvite', invitingPlayer.id)
            .catch(function (error) {
            console.log('Decline Invite error -> ' + error);
        });
    };
    // Принятие приглашения
    SignalRService.prototype.acceptInvite = function (invitingPlayer) {
        return this.proxy.invoke('AcceptInvite', invitingPlayer.id)
            .catch(function (error) {
            console.log('Accept Invite error -> ' + error);
        });
    };
    // Ход
    SignalRService.prototype.gameDoMove = function (gameMove) {
        return this.proxy.invoke('RecieveGameState', gameMove.gameId, gameMove.playerId, gameMove.cellIndex)
            .catch(function (error) {
            console.log('Game Move error -> ' + error);
        });
    };
    // Подключение к чату
    SignalRService.prototype.connect = function (user) {
        return this.proxy.invoke('Connect', user.name, user.username)
            .done(function () {
            console.log(user.name + ' connection request sent');
        })
            .catch(function (error) {
            console.log('Connect error -> ' + error);
        });
    };
    SignalRService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SignalRService);
    return SignalRService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Web\Asp.net\XOGameAngularRedux\SnakeGame.WEB\XOGameAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map