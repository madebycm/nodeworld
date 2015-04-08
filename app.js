var engine = require('./engine'), app = engine.app


engine.boot('myCollection').then(function(db){

    app.get('/', function(req, res){
        res.render('index', {hello: 'world', test: ad})
    })
    
});