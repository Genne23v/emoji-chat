import SocketIOClient from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmojiPicker from './EmojiPicker';
import Chat from './Chat';
import './App.css';

function App() {
    const [name, setName] = useState();
    const [clients, setClients] = useState(0);
    const [messages, setMessages] = useState([]);
    const [emojis, setEmojis] = useState([]);
    let socketRef = useRef();

    useEffect(() => {
        socketRef.current = SocketIOClient('http://localhost:5000');

        socketRef.current.on('init', (data) => {
            setName(data.name);
            setClients(data.clients);
            setMessages(data.messages);
        });

        socketRef.current.on('count', (count) => {
            setClients(count);
        });

        socketRef.current.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    function handleOnSubmit() {
        socketRef.current.emit('message', { name, emojis });
        setEmojis([]);
        setMessages([...messages, { name, emojis, me: true }]);
    }

    function handleOnChange(emoji) {
        setEmojis([...emojis, emoji]);
    }
    return (
        <Container id='app'>
            <Row id='chat'>
                <Col>
                    <Chat messages={messages} />
                </Col>
            </Row>
            <Row id='emoji-picker'>
                <Col>
                    <EmojiPicker
                        clients={clients}
                        emojis={emojis}
                        onChange={handleOnChange}
                        onSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
