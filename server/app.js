var compression = require('compression');
// 1. get express
var express = require('express');
// 6. get routing controller
var router = require(__dirname + '/controllers/router.js');

// 2. create the backend app
var app = express();

// 3. set view engine
app.set('view engine', 'ejs');

//gzip
app.use(compression());

// 4. setup middleware for delivering static files
app.use(express.static(__dirname + '/client'));

// 7. fire controllers and pass in app
router(app);

// 5. listen to port
var server = app.listen(process.env.PORT || '3030', function(){
    console.log('server running');
    console.log('you are listening to ' +  server.address().port);
});

