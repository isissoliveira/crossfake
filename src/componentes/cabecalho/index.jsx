// import logo from './logo_roxa.png'
import logo from './logo_azul.png'
import {AiOutlineSearch} from 'react-icons/ai'
import "./cabecalho.css"

export default function Cabecalho(){
    return(
        <header className='header'>
            <img className='logo' src={logo} alt="logo da CrossFake" />
            <div className='busca'>
                <input type="text" placeholder="O que você procura?"/>
                <AiOutlineSearch className="search"/>
                {/* <img src="" alt="icone lupa" /> */}
            </div>
        </header>
    )
}