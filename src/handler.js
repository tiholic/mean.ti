/**
 * Created by rohit on 12/9/16.
 */

var response = require('./responseHandler');

function handler(model) {
    var self = this;
    self.getList = function(req, res) {
        model.find({}, function (err, entries) {
            if (err) {
                response.send500(res, err);
            }
            if (entries) {
                res.send(entries);
            } else {
                response.send404(res);
            }
        });
    };

    self.get = function(req, res) {
        model.findById(req.params.id, function (err, entry) {
            if (err) {
                response.send500(res, err);
            }
            if (entry) {
                res.send(entry);
            } else {
                response.send404(res);
            }
        });
    };

    self.post = function(req, res) {
        var newEntry = model(req.body);
        newEntry.save(function (err) {
            if (err) {
                response.send500(res, err);
            } else {
                model.findById(newEntry._id, function (err, entry) {
                    if (err) {
                        response.send404(res);
                    } else {
                        res.send(entry);
                    }
                });
            }
        });
    };

    self.put = function(req, res) {
        model.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true},
            function (err, entry) {
                if (err) {
                    response.send500(res, err)
                }
                if (entry) {
                    res.send(entry);
                } else {
                    response.send404(res);
                }
            }
        );
    };

    self.handleDelete = function(req, res) {
        model.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                response.send500(res, err);
            } else {
                response.sendSuccess(res);
            }
        });
    };
}

module.exports = handler;