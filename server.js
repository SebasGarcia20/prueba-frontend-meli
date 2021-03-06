// Modules
const express = require('express');
const cors = require('cors');

// Config
var app = express();
var port = 3001;

// Routes
var routes = require('./server/routes');

// Server
app.use(cors());
app.use(express.static(__dirname + 'public'));
app.use('/api', routes);

app.listen(port, function () {
    console.log('Listen at port ' + port);
});

app.on('error', function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

app.on('listening', function () {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
});


module.exports = app;