import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import OutraLista from './components/OutraLista';
import {useState} from 'react'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  const name = "Gabriel"

  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  
  /* Lista */
  const meusItens = ['React', 'Vue', 'Angular']

  /* State Lift */
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <p>Meu primeiro APP em React! =D</p>
      <p>Alterando o JSX. Olá, {newName}; Soma: {2 + 2}; Func: {sum(5, 5)}</p>
      <img src={url} alt=""></img>
      
      <HelloWorld/>
      <SayMyName nome="Gabriel"/>
      <SayMyName nome={newName}/> <br />
      <Pessoa 
        nome="Gabriel" 
        idade="20" 
        profissao="Desenvolvedor" 
        foto="https://via.placeholder.com/150"
      />
      <Frase/>
      <List/>

      <br />
      <h2>Renderização de Listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <br />
      <h2>State Lift</h2>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>

    </div>
  );
}

export default App;
