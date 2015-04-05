var express=require('express'),app=new express(),server=app.listen(process.env.PORT || 3000,function(){console.log('Up @', server.address().port)});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {hello: 'world'});
});