function OutraLista({itens}){

    return(
        <>
            <h3>Lista de coisas boas</h3>
            
            {/* IF */}
            {itens.length > 0 ? (

                itens.map((item, index) => ( 
                /* 
                O correto seria usar um ID único que vem do backend ex: 
                 itens.map((item, {id: }) => (
                */
                    <p key={index}>{item}</p>
                )))
                
                /* Else */
                : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista