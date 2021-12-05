const randomName = require('./random-name');
const { addMessage, messages } = require('./cache');

let clients = 0;

module.exports.addClient = function (socket) {
    clients++;
    const name = randomName();
    console.log('socket connected', clients, name);

    socket.on('disconnect', () => {
        clients--;
        console.log('socket disconnected', clients, name);

        socket.offAny();

        socket.broadcast.emit('count', clients);
    });

    socket.on('message', ({ name, emojis }) => {
        console.log('message', name, emojis);
        addMessage(name, emojis);
        socket.broadcast.emit('message', { name, emojis });
    });

    socket.emit('init', { name, clients, messages: messages() });

    socket.broadcast.emit('count', clients);
};
