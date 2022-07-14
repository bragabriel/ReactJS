/* Forma 01: */
/*
function Pessoa(props){
    return(
        <div>
            <p>Componente com props - Pessoa:</p>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>

        </div>
    )
}
*/

/* Forma 02: */
function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <p>Componente com props - Pessoa:</p>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>

        </div>
    )
}

export default Pessoa