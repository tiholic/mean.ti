"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by rohit on 13/9/16.
 */
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var message = (function () {
    function message() {
        this.id = new Date().getTime();
    }
    return message;
}());
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = io();
        this.messages = [
            { id: new Date().getTime(), message: "Hello!", delivered: true },
            { id: new Date().getTime(), message: "World!", delivered: false },
        ];
        this.socket.on('delivered', function (id) {
            var message = _this.messages.filter(function (msg) { return msg.id == id; })[0];
            _this.messages[_this.messages.indexOf(message)].delivered = true;
        });
        this.socket.on('chat message', function (msg) { return _this.messages.push(msg); });
        this.socket.on('new user', function (newSocketId) {
            _this.messages.push({ id: 0, message: newSocketId, delivered: false });
            _this.to = newSocketId;
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.socket.disconnect();
    };
    ChatComponent.prototype.send = function (message) {
        var msg = { id: new Date().getTime(), message: message, delivered: false };
        this.messages.push(msg);
        msg['to'] = this.to;
        this.socket.emit('chat message', msg);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            templateUrl: '/ng/app/chat/chat.component.html',
            styleUrls: ['ng/app/chat/chat.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map