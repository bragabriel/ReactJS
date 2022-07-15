import Item from './Item'

function List(){
    return (
        <> {/* <-- Fragment */} 
            <h1>Minha Lista - Sem elemento pai, utilizando Fragment</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Lamborghini" ano_lancamento={1964}/>
                <Item marca="Renault"/>
                <Item marca="Chevrolet" ano_lancamento="1999"/>
                <Item/>
            </ul>
        </>
    )
}

export default List