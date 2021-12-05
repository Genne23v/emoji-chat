import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import EmojiInput from './EmojiInput';

export default function EmojiPicker({ clients, emojis, onChange, onSubmit }) {
    return (
        <div>
            <EmojiInput emojis={emojis} onSubmit={onSubmit} />
            <div className='text-center'>
                <Picker
                    title='Pick your emoji'
                    emoji='point_up'
                    onClick={(emoji) => onChange(emoji)}
                />
                <div className='text-center my-2'>
                    <b>Emoji Chat</b> - <i>{clients} connected</i>
                </div>
            </div>
        </div>
    );
}
