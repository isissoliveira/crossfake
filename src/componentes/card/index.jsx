import "./card.css"
import {AiOutlineHeart} from 'react-icons/ai'

export default function Card({ photo }) {
    return (
        <div className="card">
            <img src={photo.url} alt="photo" />
            <p className="title">{photo.titulo}<AiOutlineHeart className="favorite"></AiOutlineHeart></p>
        </div>
    )
}
