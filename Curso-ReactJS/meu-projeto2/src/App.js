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
     <h1>Testando Eventos</h1>
    </div>
  );
}

export default App;
