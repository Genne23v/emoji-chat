import { useEffect, useRef } from 'react';
import Message from './Message';

export default function Chat({ messages }) {
    const messagesRef = useRef();

    useEffect(() => {
        messagesRef.current.scrollIntoView(false);
    }, [messages]);
    return (
        <div id='messages' ref={messagesRef}>
            {messages &&
                messages.map((message, idx) => (
                    <Message
                        key={idx}
                        name={message.name}
                        emojis={message.emojis}
                        me={message.me}
                    />
                ))}
        </div>
    );
}
