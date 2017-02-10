// modules =================================================
var express        = require('express'),
    app            = express(),
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    jwt            = require("jsonwebtoken");
    

// configuration ===========================================
	
// config files
var config = require('./config/config');
app.set('superSecret', config.secret);
//
/*require('./config/passport')(passport);
//app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());*/

var port = process.env.PORT || 8080; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.urlencoded({ limit: '16mb', extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '16mb' })); // parse application/json 
app.use(morgan('dev'));
app.use(require('prerender-node'));
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, x-access-token');
    next();
});
//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users


// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
process.on('uncaughtException', function(err) {
    console.log(err);
    
});

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app