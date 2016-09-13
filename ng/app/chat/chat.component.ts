/**
 * Created by rohit on 13/9/16.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import * as io from "socket.io-client";

class message{
    id: number = new Date().getTime();
    message: string;
    delivered: boolean;
}

@Component({
    selector: 'chat',
    templateUrl: '/ng/app/chat/chat.component.html',
    styleUrls: ['ng/app/chat/chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy{
    messages: message[];
    to: string;
    socket;
    constructor(){ }

    ngOnInit(){
        this.socket = io();
        this.messages = [
                {id: new Date().getTime(), message:"Hello!", delivered: true},
                {id: new Date().getTime(), message:"World!", delivered: false},
        ];
        this.socket.on('delivered', id => {
                                            var message = this.messages.filter(msg => msg.id==id)[0];
                                            this.messages[this.messages.indexOf(message)].delivered = true;
                                        });
        this.socket.on('chat message', msg => this.messages.push(msg));
        this.socket.on('new user', newSocketId => {
            this.messages.push({id:0,message:newSocketId, delivered:false});
            this.to = newSocketId;
        });
    }

    ngOnDestroy(){
        this.socket.disconnect();
    }

    send(message: string): void{
        var msg = { id: new Date().getTime(), message: message, delivered: false };
        this.messages.push(msg);
        msg['to'] = this.to;
        this.socket.emit('chat message', msg);
    }

}