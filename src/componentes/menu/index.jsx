import './menu.css'
import { AiOutlineHome, AiOutlineComment } from 'react-icons/ai'
import {GiWeightLiftingUp, GiTrophyCup, GiThreeFriends} from 'react-icons/gi'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <a href='#'><AiOutlineHome className='menuIcon'/> <label>Início</label> </a>
                </li>
                <li>
                    <a href='#'><GiWeightLiftingUp className='menuIcon'/> <label>Treinos</label></a>
                </li>
                <li>
                    <a href='#'><GiTrophyCup className='menuIcon'/> <label>Campeonatos</label></a>
                </li>
                <li>
                    <a href='#'><GiThreeFriends className='menuIcon'/> <label>Novos alunos</label></a>
                </li>
                <li>
                    <a href='#'><AiOutlineComment className='menuIcon'/> <label>Depoimentos</label></a>
                </li>
            </ul>
        </nav>
    )
}
