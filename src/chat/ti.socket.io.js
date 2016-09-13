/**
 * Created by rohit on 13/9/16.
 */
function addConnections(io){
    io.on('connection', function(socket){
        console.log("=========================================================================== user connected :)");
        socket.on('disconnect', function(){
            console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX user disconnected :(');
        });
        socket.on('chat message', function(msg){
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> received message O_o');
            console.log('message:', msg);
            socket.emit('chat message', msg);
        });
        socket.broadcast.emit('hi');
    });
    io.emit("notification", { for : 'everyone' })
}

module.exports = addConnections;