function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() /* Parando a execução do form (de enviar para o server) */
        console.log("Cadastrou o Usuário")
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form