/**
 * Created by rohit on 13/9/16.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import * as io from "socket.io-client";

@Component({
    selector: 'chat',
    templateUrl: '/ng/app/chat/chat.component.html',
    styleUrls: ['ng/app/chat/chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy{
    messages: string[];
    socket;
    constructor(){ }

    ngOnInit(){
        this.socket = io();
        this.messages = ["hello", "world"];
        this.socket.on('chat message', message => this.messages.push(message))
    }

    ngOnDestroy(){
        this.socket.disconnect();
    }

    send(message: string): void{
        this.socket.emit('chat message', message);
    }

}