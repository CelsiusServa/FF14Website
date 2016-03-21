var express = require('express');
var http = require('http');
var compression = require('compression');
var fs = require('fs');
var serveIndex = require('serve-index');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

function initIPAdress() {
    var adr = process.env.OPENSHIFT_NODEJS_IP;
    if (typeof adr === "undefined") {
        console.warn('No OPENSHIFT_NODEJS_IP var, using localhost');
        adr = 'localhost';
    }

    ipaddress = adr;
}
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

initIPAdress();

app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), ipaddress, port);
});


app.use(allowCrossDomain);
app.use(compression());
app.use(express.static(__dirname + '/app'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/app', serveIndex(__dirname + '/app', { icons: true }));
app.use('/api/updates', express.static(__dirname + '/releases'));

//var secureServer = http.createServer(app).listen('4040');


