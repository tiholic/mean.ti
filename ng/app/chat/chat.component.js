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
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = io();
        this.messages = ["hello", "world"];
        this.socket.on('chat message', function (message) { return _this.messages.push(message); });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.socket.disconnect();
    };
    ChatComponent.prototype.send = function (message) {
        this.socket.emit('chat message', message);
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