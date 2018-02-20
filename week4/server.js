//mongodb://<dbuser>:<dbpassword>@ds125628.mlab.com:25628/dwd-spring2018

var config = require('./config.js');
//console.log(JSON.stringify(config));
var mongojs = require('mongojs');

var express = require('express');
var app = express();

//var db = mongojs("dongphilyoo:dwd2018@ds125628.mlab.com:25628/dwd-spring2018", ["undecided"]);
//var db = mongojs(config.mlabstring, ["undecided"]);
var db = mongojs(config, ["undecided"]);

app.use(express.static('public'));
app.set('view engine', 'ejs');

var thesubmissions = [];

app.get('/formpost', function (req, res) {
//    thesubmissions.push(req.query.textfield);
//    res.redirect('/undecided');
    
    db.undecided.save({"submission":req.query.textfield}, function(err, saved) {
    if( err || !saved ) console.log("Not saved");
      else console.log("Saved");
  });

  //res.redirect('/undecided');
});

//app.get('/undecided', function (req, res) {
//    var htmlout = "<html><body style='background-color:#FFFF00;'>";
//    for (var i = 0; i < thesubmissions.length; i++) {
//        var ref = thesubmissions[i].replace(/\s/g, '').toLowerCase();
//        htmlout = htmlout + "<a href='http://www." + ref + ".com' style='color:#0025d8;font-weight:bold;font-size:3.2rem;margin:20px 8%;display:inline-block;'>" + thesubmissions[i] + "<br>";
//    }
//    var htmlout = htmlout + "</body></html>";
//    res.send(htmlout);
//});


app.get('/undecided', function(req, res) {

  db.undecided.find({}, function(err, saved) {
    if (err || !saved) {
    	console.log("No results");
    }
    else {
      console.log(saved);
        var jj = JSON.stringify(saved);
        console.log(jj);
      //res.render('undecided.ejs', {thedata:saved});

    	// saved.forEach(function(record) {
      // 	console.log(record);
    	// });

    	/* Alternatively you could loop through the records with a "for"
    	for (var i = 0; i < saved.length; i++) {
  	  	console.log(saved[i]);
  	}
  	*/
    }
  });

});




app.listen(8000, function () {
    console.log('8000')
});
