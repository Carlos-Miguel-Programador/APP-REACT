import "./newProject.module.css"
import style from "./newProject.module.css"
import {Link} from "react-router-dom"

export default function NewProject(){

    
    return (
        <>
            <h2>Editar projecto</h2>

            <div>
                <nav>
                    <Link to={'/alterar-projecto'}>
                        <a className={style.link}>Alterar Projecto</a>
                    </Link>
                    <Link to={'/deletar-projecto'}>
                        <a className={style.link}>Deletar Projecto</a>
                    </Link>
                </nav>
            </div>
        </>
    )
}