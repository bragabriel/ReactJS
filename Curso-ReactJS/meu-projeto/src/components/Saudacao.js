function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`
    }

    return(
        <>
        {/* Renderizando o parágrafo apenas se houver algum nome no state */}
        {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao