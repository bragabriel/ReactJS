import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  return (
    <div className="App">
     <h1>Testando Eventos</h1>
     <Evento numero="1"/>
     <Form/>
    
     <br /><br />
    
     <h1>Renderização Condicional:</h1>
     <Condicional/>
    </div>
  );
}

export default App;
