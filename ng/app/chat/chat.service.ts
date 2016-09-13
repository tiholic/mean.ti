/**
 * Created by rohit on 13/9/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

declare var socket: any;

@Injectable()
export class ChatService{

    constructor(private http: Http){ }

    getChatter($rootScope){
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
        };
    }

    sendMessage(message: string): void{
        socket.emit('chat message', message);
    }

    getMessage(){
        socket.on('chat message', message => message);
    }

    getNotified() {
        socket.on('notification', function (x) {
            alert(x);
        });
    }
}