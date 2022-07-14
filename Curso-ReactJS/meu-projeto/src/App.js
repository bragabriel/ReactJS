import './App.css';

function App() {
  const name = "Gabriel"

  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro APP em React! =D</p>
      <br></br>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}; Soma: {2 + 2}; Func: {sum(5, 5)}</p>
      <img src={url} alt=""></img>
    </div>
  );
}

export default App;
