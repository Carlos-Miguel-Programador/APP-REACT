import { useState } from "react"
import "./newProject.module.css"
import style from "./newProject.module.css"
import axios from "axios"

export default function NewProject(){

    const [status, setStatus] = useState(0)
    const [title, setTitle] = useState('')
    const [money, setMoney] = useState('')
    const [type, setType] = useState('')
    const [warning, setWarning] = useState('')

    // QUANDO INPUT GANHA FOCUS LIMPA O SMALL
    const WarningNone = ()=>{
        setWarning('')
    }
    // QUANDO INPUT GANHA FOCUS LIMPA O SMALL

    return (
        <>
            <h2>Criar projecto</h2>

            <form onSubmit={ async (e) =>{
            e.preventDefault()

            console.log('Titulo: ', title);
            console.log('Orcamento: ', money, 'Kz');
            console.log('Tipo: ', type);

            if(title != '' && type != '' && Number(money) != 0.0 && isNaN(Number(money)) == false){
                await axios.get('http://localhost:3000/project/')
                .then((response)=>{
                    if(response.data.length == 0){
                        axios.post('http://localhost:3000/project/', {
                            title: title,
                            money: Number(money),
                            type: type
                        })
                        .then(()=>{
                            setStatus(1)
                            setWarning('Projecto criado com sucesso!!!')
                        })
                        .catch(()=>{
                            setWarning('Ocorreu um erro!!!')
                        })
                    }else if(response.data.length >= 12){
                        setStatus(0)
                        setWarning('Atingiu o número de limite de projectos')
                    }                
                    else{
                        axios.post('http://localhost:3000/project/', {
                            title: title,
                            money: Number(money),
                            type: type
                        })
                        .then(()=>{
                            setStatus(1)
                            setWarning('Projecto criado com sucesso!!!')
                        })
                        .catch(()=>{
                            setWarning('Ocorreu um erro!!!')
                        })
                    }
                })
                .catch(()=>{
                    setWarning('Ocorreu um erro!!!')
                })
            }else{
                setStatus(0)
                setWarning('Verifique os dados inseridos')
            }
    }}>
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
                        onChange={(e)=>setMoney((e.target.value))}
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
                    <button type="submit">Criar</button>
                </div>
            </form>
        </>
    )
}