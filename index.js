
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.get('/beginner/myfirstpage', function(req, res){
    res.render("beginner/myfirstpage")
})

app.get('/beginner', function(req, res){
    res.render("beginner/beginner")
})


app.get('/beginner/form', function(req, res){
    res.render("beginner/form")
})


app.post('/addform',function (req, res) {


    console.log("ADD form details!", req.body);

    res.send(req.body);


})

app.get('/intermediate/divandspan', function(req, res){
    res.render("intermediate/divandspan")
})

app.get('/intermediate/address', function(req, res){
    res.render("intermediate/address")
})