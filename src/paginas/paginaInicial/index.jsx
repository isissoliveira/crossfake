import "./paginaInicial.css"
import Cabecalho from "componentes/cabecalho"
import MainBody from "componentes/mainBody"

export default function PaginaInicial() {
    return (
        <div className="box">
            <Cabecalho />
            <MainBody />
        </div>
    )
}