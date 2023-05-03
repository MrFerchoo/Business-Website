const express = require('express');
const path  = require('path');

var app = express();

//app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', function(request,response){
  response.sendFile(path.join(__dirname + '/views/firstview.html'))
});

/*app.get('/firstview', function(request, response) {
  response.sendFile(path.join(__dirname + '/views/firstview.html'));
});*/

app.listen(3000);
