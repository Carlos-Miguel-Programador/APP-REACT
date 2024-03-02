import "./home.module.css"
import axios from "axios"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        axios.get('http://localhost:3000/project')
            .then((res) => {
                const datas = res.data
                let count = 1
                console.log(datas);
                const allDiv = document.querySelectorAll('section>div')

                allDiv.forEach(element => {
                    document.querySelector('section')?.removeChild(element)
                });

                console.log(allDiv.length);
                
                Array(datas).map(element => {
                    const type_ = document.createElement('p');
                    const money_ = document.createElement('p');
                    const title_ = document.createElement('h3');                     
                    const id = document.createElement('p');                   
                    const div = document.createElement('div');

                    div.setAttribute('class', 'project' + count);

                    title_.innerHTML = element.title;
                    type_.innerHTML = '<strong>Tipo do projecto</strong> <br>' + element.type;
                    money_.innerHTML = '<strong>Orçamento total:</strong><br>' + element.money;
                    id.innerHTML = 'ID: ' + element.id

                    div.appendChild(title_)
                    div.appendChild(type_)
                    div.appendChild(money_)
                    div.appendChild(id)

                    document.querySelector('section')?.appendChild(div)
                    
                    console.log(element.title);
                    console.log(element.type);
                    console.log(element.money);

                    count++;
                });
            })
    }, [])

    return (
        <>
            <h2>Meus projectos</h2>
            <section></section>
        </>
    )
}