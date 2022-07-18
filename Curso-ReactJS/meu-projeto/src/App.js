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

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

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

    <Router>

      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>

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
    
    <Footer />
    </Router>

    
  );
}

export default App;
