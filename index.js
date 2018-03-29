const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const http = require('http');
const app = new Koa();
const router = new Router();
const bodyparser = require('koa-bodyparser');
const convert = require('koa-convert');
const bankList = require('./router/bank');
app.use(convert(cors()));

app.use(bodyparser({
    enableTypes: [
        'json', 'form', 'text'
    ],
    formLimit: '50mb',
    jsonLimit: '50mb',
    textLimit: '50mb'
}));
router.use('/resource', bankList.routes(), bankList.allowedMethods());
app.use(router.routes(), router.allowedMethods());

// app.listen(12000);
const server = http.createServer(app.callback());
server.on('listening', onListening);
server.listen(12000);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? addr
        : addr.port;
    console.log(`Listening on http://${getIPAdress()}:${bind}`);
}

function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
