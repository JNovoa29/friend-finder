var path = require('path');

var friends = require('../app/data/friends.js');

//export api routes
module.exports = function(app) {
    //list of friend entries
    app.get('/api/friends', function(req, res) {
        res.json(friends)
    })
    //add new friend
    app.post('api/friends', function(req, res) {
        var userInput = req.body

        var userResponses = userInput.scores
        //match
        var userName = ''
        var userImage = ''
        var totalDifference = 10000

        for ( var i = 0; i < friends.length; i++) {
            var diff = 0
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j])
            }
            if (diff < totalDifference) {
                totalDifference = diff
                 = friends[i].name
                userImage = friends[i].photo
            }
        }
        friends.push(userInput)

        res.json({status: 'OK', userName: userName, userImage: userImage})
    })
};







