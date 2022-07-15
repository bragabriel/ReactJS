import Item from './Item'

function List(){
    return (
        <> {/* <-- Fragment */} 
            <h1>Minha Lista - Sem elemento pai, utilizando Fragment</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Lamborghini"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List