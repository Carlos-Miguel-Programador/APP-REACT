import imageLogo from "../assets/image.png"
import "./navbar.module.css"
import { Link } from "react-router-dom"

export default function NavBar(){

    return (
        <>
            <header>
                <img src={imageLogo}/>
                <nav>
                    <Link id="links" to="/novo-projecto">
                        <a>Novo Projecto</a>
                    </Link>
                    <Link id="links" to="/meus-projectos">
                        <a className="linkhome">Projectos</a>
                    </Link>
                    <Link id="links" to="/editar-projecto">
                        <a className="linkhome">Editar projecto</a>
                    </Link>
                    <Link id="links" to="/">
                        <a className="linkhome">Home</a>
                    </Link>
                </nav>
            </header>
        </>
    )
}