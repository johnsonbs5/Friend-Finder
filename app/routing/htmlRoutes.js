// Dependencies are listed below
var path = require("path");

// routing is listed below

module.exports = function (app) {
    // HTML GET Requests code handles when users visit my page.

//    user is shown an HTML content 
    // ---------------------------------------------------------------------------

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    /*app.get("/reserve", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });*/

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};