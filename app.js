var engine = require('./engine'), app = engine.app, Promise = engine.Promise

engine.boot('myCollection').then(function(db){

    app.get('/', function(req, res){
        res.render('index', {hello: 'world'})
    })

});