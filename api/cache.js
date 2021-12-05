const LRU = require('lru-cache');

const oneHour = 1000 * 60 * 60;
const cache = new LRU({ max: 50, maxAge: oneHour });

let id = 1;
module.exports.addMessage = function (name, emojis) {
    cache.set(id++, { name, emojis });
};

module.exports.messages = function () {
    return cache.values();
};
