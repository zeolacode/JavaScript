import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNoma';
import Saudacao from './components/Saudacao';

import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {

//  ***********************
{/*
  const name = 'Pedro'

  const newName = name.toUpperCase()

  function soma(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"
*/}

{/* PROPS */}

  // const nome = "Maria"
{/*
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()


  return (
      <div className="App">
        {/* <p>Olá, {newName}</p> 
        <p>Soma: {2 + 3}</p>
        <p>Soma: {soma(2,5)}</p>
        <img src={url} alt="Minha Imagem"></img> 
        <HelloWorld />
        */}

        {/* PROPS */}
        {/*  <h1>Testando CSS</h1>
        <Frase />
        <Frase />
        <SayMyName nome="Pedro" />
        <SayMyName nome="João" />
        <SayMyName nome={nome} />
        <Pessoa nome="Pedro" 
        idade="24" 
        profissao="Eng eletrônico" 
        foto="https://via.placeholder.com/150"/>
        <List />
        */}

        {/*<h1>Testando Eventos</h1>
        <Evento numero="1" />
        <Form />
        */}

        {/* <h1>Renderização Condicional</h1>
        <Condicional />
        */}
        
        
        {/*<h1>Renderização de Listas</h1>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]} />
        */}

        {/*<h1>State Lift</h1>     
        <SeuNome setNome={setNome} />
        <Saudacao nome={nome} />
        */}


     // </div>

  //);
      //}
// ********************************

  return(
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/empresa">Empresa</Link></li>
      </ul>
      <ul>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </Router>
  )

}

export default App;
