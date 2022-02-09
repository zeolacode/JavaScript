import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
{/*
  const name = 'Pedro'

  const newName = name.toUpperCase()

  function soma(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"
*/}

{/* PROPS */}

  const nome = "Maria"


  return (
    <div className="App">
    {/* <p>Olá, {newName}</p> 
        <p>Soma: {2 + 3}</p>
        <p>Soma: {soma(2,5)}</p>
        <img src={url} alt="Minha Imagem"></img> 
        <HelloWorld />
        */}

        {/* PROPS */}
        <h1>Testando CSS</h1>
        <Frase />
        <Frase />
        <SayMyName nome="Pedro" />
        <SayMyName nome="João" />
        <SayMyName nome={nome} />
        <Pessoa nome="Pedro" 
        idade="24" 
        profissao="Eng eletrônico" 
        foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
