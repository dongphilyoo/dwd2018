var express = require('express');
var app = express();

app.use(express.static('public'));

var thesubmissions = [];

app.get('/formpost', function (req, res) {
    thesubmissions.push(req.query.textfield);
    res.redirect('/undecided');
});

app.get('/undecided', function (req, res) {
    var htmlout = "<html><body style='background-color:#FFFF00;'>";
    for (var i = 0; i < thesubmissions.length; i++) {
        var ref = thesubmissions[i].replace(/\s/g, '').toLowerCase();
        htmlout = htmlout + "<a href='http://www." + ref + ".com' style='color:#0025d8;font-weight:bold;font-size:3.2rem;margin:20px 8%;display:inline-block;'>" + thesubmissions[i] + "<br>";
    }
    var htmlout = htmlout + "</body></html>";
    res.send(htmlout);
});

app.listen(5555, function () {
    console.log('5555')
});
