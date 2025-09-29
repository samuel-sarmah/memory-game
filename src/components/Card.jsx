import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"

export default function Card({ handleClick, data, selectedCards, matchedCards }) {

    const emojiEl = data.map((emoji, index) => 
        <li key={index} className="card-item">
            <button className="btn btn--emoji" onClick={() => handleClick(emoji.name, index)}>
                {decodeEntity(emoji.htmlCode[0])}
            </button>
        </li>
    )

    return <ul className="card-container">{emojiEl}</ul>
}