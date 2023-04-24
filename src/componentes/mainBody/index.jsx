import Galeria from "componentes/galeria"
import Menu from "componentes/menu"
import banner from "./banner2.png"
import "./mainBody.css"

export default function MainBody() {
    return (
        <div className="mainBody">
            <section className="mainContent">
                <div className="inline">
                    <Menu />
                    <section className="rightSection">
                        <div className="banner">
                            <img src={banner} alt="banner" />
                        </div>
                        <Galeria/>
                    </section>
                </div>
            </section>
        </div>
    )
}