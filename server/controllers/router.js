


// 1. export the routing controller as a function
// it's a function so we can pass it the app
module.exports = function(app) {

    // app.use(app.router);

    // 2. create a get handler 
    app.get('/', function(req, res){
        // 3. render the view
        res.render('index');
    }); 

    // Handle 404
    app.use(function(req, res) {
        res.status(404);
        res.render('404.ejs');
    });

} 