# Emoji Chat App Using Socket.io and Emoji Mart

Simple emoji chat React.js app using socket.io frameworks. API folder is a simple server generating user names automatically and store chat history in lru cache (deletes the least recently used history). Multiple users can share emojis simultaneously supported from Emoji Mart framework.

![emoji-chat](./ref/emoji-chat.jpg)

## Frameworks

### Server Side (api)

<hr>
LRU Cache<br>

`const cache = new LRU({ max: 50, maxAge: 1000 * 60 * 60 });`

Unique name generator<br>
`const randomName = uniqueNameGenerator({ dictionaries: [colors, animals] });`

Socket.io<br>
`const app = require('express');`<br>
`const server = require('http').createServer(app);`<br>
`const io = require('socket.io)(server)`<br>
`io.on('connection', () => { /* code */ });`<br>
`server.listen(3000);`

### Client Side (web)

<hr>

Client socket.io, React Bootstrap, Emoji Mart

`import 'emoji-mart/css/emoji-mart.css';`<br>
`import { Picker } from 'emoji-mart';`<br>
`<Picker set='apple' />`<br>
`<Picker title='Pick your emoji' emoji='point_up' />`<br><br>

useRef Hook returns a mutable ref object whose `.current` property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.<br>
`let socketRef = useRef();`<br>
`socketRef.current = SocketIOClient(http://localhost:5000);`<br>
`socketRef.current.on('message', (message) => {`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`setMessages(messages => [...messages, message]);`<br>
`});`<br>
