import { useState } from "react"
import "./newProject.module.css"
import style from "./newProject.module.css"
import axios from "axios"

export default function NewProject(){

    const [status, setStatus] = useState(0)
    const [title, setTitle] = useState('')
    const [ID, setID] = useState('')
    const [money, setMoney] = useState(0)
    const [type, setType] = useState('')
    const [warning, setWarning] = useState('')

    const WarningNone = ()=>{
        setWarning('')
    }

    return (
        <>
            <h2>Editar projecto</h2>

            <form onSubmit={async(e)=>{
                e.preventDefault()

                const url = 'http://localhost:3000/project/'+ID

                if(ID != '' && title != '' && money != 0.0 && type != ''){
                    axios.put(url, {
                        title: title,
                        money: money,
                        type: type
                    })
                    .then(()=>{
                        setStatus(1)
                        setWarning('Alteração feita com sucesso')
                    })
                    .catch((err)=>{
                        setStatus(0)
                        setWarning('Não foi possível fazer alterações')
                        console.log(err);
                    })
                }else{
                    setStatus(0)
                    setWarning('Preencha todos os campos')
                }


    }}>
                <div>
                    <input
                        type="text" 
                        placeholder="ID do projecto"
                        onChange={(e)=>setID(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text" 
                        maxLength={255} 
                        placeholder="Título do projecto"
                        onChange={(e)=>setTitle(e.target.value)}
                        onFocus={WarningNone}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        maxLength={255}
                        placeholder="Orçamento do projecto"
                        onChange={(e)=>setMoney(Number(e.target.value))}
                        onFocus={WarningNone}
                    />
                </div>
                <div>
                    <select
                        onChange={(e)=>setType(e.target.value)}
                        onFocus={WarningNone}
                    >
                        <option>Selecione o gênero do seu projecto</option>
                        <option>Comercial</option>
                        <option>Empresarial</option>
                        <option>Prestação de serviço</option>
                        <option>Outros...</option>
                    </select>
                </div>
                <div>
                    <small className={status == 1 ? style.sucesso : style.erro}>{warning}</small>
                </div>
                <div>
                    <button type="submit">Concluir</button>
                </div>
            </form>
        </>
    )
}