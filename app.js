var engine = require('./engine'), app = engine.app

app.get('/', function(req, res){
    res.render('index', {hello: 'world'})
})

engine.boot('myCollection').then(function(db){

    console.log('Hello world!');

});