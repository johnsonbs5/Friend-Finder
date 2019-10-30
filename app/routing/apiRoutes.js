//Setting Routes Info Below 
//utilizes both the app.get and app.post functionality 
//apiRoutes.js used to handle the compatibility


var friends = require('../data/friends.js');

// app.get and app.post functions routes
module.exports = function (app) {
    // The app.get request handles when user 'visits' a page
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // The app.post request handles when a user submits a form and thus submits data to the surver
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };


        // Parsing results of user photo & name
        var userName = userData.name;

        var userPhoto = userData.photo;

        // Parsing our POST results
        var userData = req.body;
        
        var userScores = userData.scores;
        

        // calculating score diff between users 
        var totalDifference = 0;

        //loop for data array objects which will get us our scores
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j = 0; j < 10; j++) {
                // calculating scores. Checking to see if working
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                //best match sums
                if (totalDifference <= bestMatch.friendDifference) {

                    
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // using push method to save data 
        friends.push(userData);

        res.json(bestMatch);
    });
};