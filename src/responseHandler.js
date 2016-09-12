/**
 * Created by rohit on 12/9/16.
 */

function send404(res){
    res.send({
        "status": "404",
        "message": "Not Found"
    });
}

function send500(res, err) {
    res.send({
        "status": "404",
        "message": "Internal Server Error",
        "detail": err.message
    });
}

function sendSuccess(res) {
    res.send({
        "status" : 200,
        "message" : "Success"
    });
}

module.exports = {
    send404: send404,
    send500: send500,
    sendSuccess: sendSuccess
};