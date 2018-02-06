var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

var count = 0;

//var thesubmissions = [];

//var popup = require('window-popup').windowPopup;
//popup(500, 500, 'http://www.google.com', 'Google');

//const opn = require('opn');

//open('http://www.google.com', function (err) {
//    if (err) throw err;
//});


app.get('/formpost', function (req, res) {
//    res.send("You submitted " + req.query.textfield);
var thesubmissions = [];
    
    thesubmissions.push(req.query.textfield);
    res.render('form.ejs', thesubmissions);
    
//      res.redirect('/display');
//    res.render('form.ejs', thesubmissions);
   
});

//app.get('/display', function (req, res) {
//    res.render('form.ejs', thesubmissions);

//    var htmlout = "<html><body>";
//    for (var i = 0; i < thesubmissions.length; i++) {
//        htmlout = htmlout + thesubmissions[i] + "<br>";
//    }
//    var htmlout = htmlout + "</body></html>";
//    res.send(htmlout);
//});
//
//app.get('/count', function (req, res) {
//    count++;
//    res.send("<html><body><h1>" + count + "</h1></body></html>");
//});
//
//app.get('/', function (req, res) {
//    res.send('Hello World!')
//});
//
//app.get('/somethingelse', function (req, res) {
//    res.send("Goodbye");
//
//})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
