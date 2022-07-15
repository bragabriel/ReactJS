import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            {/* <li>{props.marca}</li> */}
            <li>{marca} - {ano_lancamento}</li>
            {/* <p>Descrição: asdasd</p> */}
        </>
    )
}

/* Propriedade do componente <-> Validação a nível de programação: vai exibir na tela, mas dá erro no console*/
Item.propTypes = {
    marca: PropTypes.string.isRequired, /* Dizendo que a marca é uma String e é Obrigatória */
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 'X',
}

export default Item