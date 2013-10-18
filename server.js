// var http= require('http');
// function start() {
// 	function onRequest(request,response) {
// 		console.log("Request received."); 
// 		response.writeHead(200, {"Content-Type": "text/plain"});
// 		response.write("Hello World");
// 		response.end();
// 	}
// http.createServer(onRequest).listen(3000);
// console.log("Server has started");
// }
// exports.start=start; 
 var express = require('express');
 var app = express();
 app.use(express.bodyParser()); //allows us to use .body gets request before it gets to your function. 
 	app.use(function(req, res, next){
 		res.header('Access-Control-Allow-Origin', '*');
 		res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
 		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 		next();
 	});
 app.get('/hi', function(req,res){
 	console.log("hey");
 	res.send("done");

 });
 app.post('/bye', function(req,res){
 	console.log(req.body); 
 	res.send("here you go");
 });
 app.get('/bye', function(req,res){
 	console.log('you did it!');
 	res.send('you really did it');
 });
 // app.options('*', function(req,res){
 // 	res.setHeader('Access-Control-Allow-Origin', )
 // });
app.listen(3000);
console.log("listening on port 3000");