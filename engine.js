var // madebycm 2015
   
    DEFAULT_HTTP_PORT = 9000,
    DEFAULT_MONGO_PORT = 27071,

    express = require('express'),
    app = new express(),
    mongo = require('mongodb').MongoClient,
    Promise = require('Promise')
;

app.set('view engine', 'ejs');
app.disable('x-powered-by');

var exp = {
    boot: function(collection){
        return new Promise(function(resolve, reject){
            mongo.connect('mongodb://localhost:27017/'+collection, function(err, db){

                if(!err){
                    console.log("[OK] MongoDB", "\t", "Port:", db.serverConfig.port);

                    var server = app.listen(process.env.PORT || DEFAULT_HTTP_PORT, function(){
                        console.log('[OK] Server', "\t", "Port:", server.address().port)

                        resolve(db);
                    });
                }

                else {
                    console.log(err);
                    reject(err);
                }
            });
        });
    },
    app: app,
    Promise: Promise,
}

module.exports = exp;
