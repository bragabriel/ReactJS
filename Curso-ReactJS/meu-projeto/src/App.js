import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const name = "Gabriel"

  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

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
    </div>
  );
}

export default App;
