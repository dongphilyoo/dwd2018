var express = require('express');
var app = express();

app.use(express.static('public'));

var count = 0;

var thesubmissions = [];

app.set('view engine', 'ejs');


app.get('/templatetest', function(req, res) {
//	var data = {person: {name: "Shawn", other: "blah"}};
        var data = [];

    for(var i=0;i<thesubmissions.length;i++){
        data.push(thesubmissions[i]);
    }
    res.render('template.ejs', data);
    //console.log(thesubmissions);
});

app.get('/formpost', function(req, res) {
  //res.send("You submitted " + req.query.textfield);
  thesubmissions.push(req.query.textfield);
    //console.log(thesubmissions);
  res.redirect('/display');
    
    
    
//  res.redirect('/test.html');
});

app.get('/display', function(req, res) {
  var htmlout = "<html><body>";
  for (var i = 0; i < thesubmissions.length; i++) {
      thesubmissions[i].replace(/\s/g,'');
    htmlout = htmlout + "<a class='links' href='http://www." + thesubmissions[i] + ".com'>" + thesubmissions[i] + "<br>";
  }
  var htmlout = htmlout + "</body></html>";
  res.send(htmlout);
});

app.get('/count', function(req, res) {
  count++;
  res.send("<html><body><h1>"+count+"</h1></body></html>");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/somethingelse', function(req, res) {
  res.send("Goodbye");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});