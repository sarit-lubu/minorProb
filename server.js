
var http = require('http');
var express = require('express');
var app = express();
const PORT=8082;

var bp = require('body-parser');
var mo= require('method-override');

app.use(require('cookie-parser'));
app.use(require('morgan'));
app.use(bp.json());
app.use(bp.json({type:'application/vnd.api+json'}));
app.use(bp.urlencoded({extended:'true'}));
//app.use(mo('X-HTTp-Method-Override'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.get('*', function(req, res) {
  return res.status(200).send({mesage: "OK"});
})
/*
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
*/

var server = http.createServer(app);

server.listen(PORT, function(){

    console.log("Server listening on: http://localhost:%s", PORT);
});
