/**
 * Created by rohit on 13/9/16.
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ChatService } from "./chat.service";

declare var socket: any;

@Component({
    selector: 'chat',
    templateUrl: '/ng/app/chat/chat.component.html',
    styleUrls: ['ng/app/chat/chat.component.css']
})
export class ChatComponent implements OnInit{
    messages: string[];
    socket;
    constructor(private router: Router){ }

    ngOnInit(){
        this.socket = socket;
        this.messages = ["hello", "world"];
    }

    send(message: string): void{
        // ChatService.sendMessage(message);
    }

}