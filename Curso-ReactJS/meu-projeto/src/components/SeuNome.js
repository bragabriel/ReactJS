/* Usando o State Lift */
function SeuNome({setNome}){

    return(
        <div>
            <p>Digite o seu nome: </p>
            <input type="text" placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)} />
            {/* pegando o evento 'e', e criando uma array function que ativa o método que veio por props
            e alteramos o e.target.value */}
        </div>
    )
}

export default SeuNome