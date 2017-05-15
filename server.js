var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send('Server Started....');
});

var server=app.listen(8080,function(){
	var host=server.address().address;
	var port= server.address().port;

	console.log('Listening @ 8080...........');

});

app.get('/resistor',function(req,res){
	res.sendFile(__dirname+'/resistanceHome.html');
});

app.use(express.static(__dirname + '/static'));
