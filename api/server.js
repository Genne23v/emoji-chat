const { createServer } = require('http');
const { Server } = require('socket.io');
const { addClient } = require('./socket-client');

const app = require('./app');
const httpServer = createServer(app);

const wsServerOption = {
    cors: {
        origin: '*',
        methods: ['GET'],
    },
};
const wsServer = new Server(httpServer, wsServerOption);

wsServer.on('connection', (socket) => addClient(socket));

httpServer.listen(5000);
