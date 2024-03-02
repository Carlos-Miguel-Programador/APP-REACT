import {useState} from "react"
import style from "./newProject.module.css"
import axios from "axios"

export default function Delete(){
    const [ID, setID] = useState('')
    const [status, setStatus] = useState(0)
    const [warning, setWarning] = useState('')

    return (
        <>
            <h2>Deletar projecto</h2>
            <form onSubmit={(e)=>{
                e.preventDefault()
                const url = 'http://localhost:3000/project/'

                axios.delete(url+ID)
                .then(()=>{
                    setStatus(1)
                    setWarning('Projecto delatado com sucesso')
                })
                .catch(()=>{
                    setStatus(0)
                    setWarning('Não foi possível deletar o projecto')
                })
            }}>
                <div>
                    <input
                        type="text" 
                        step={1}
                        placeholder="ID do projecto"
                        onChange={(e)=>setID(e.target.value)}
                    />
                </div>
                <div>
                    <small className={status == 1 ? style.sucesso : style.erro}>{warning}</small>
                </div>
                <div>
                    <button type="submit">Deletar</button>
                </div>
            </form>
        </>
    )
}