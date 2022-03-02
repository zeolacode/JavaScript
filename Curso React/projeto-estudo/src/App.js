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
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Footer from './components/layout/Footer';


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
      <Navbar />
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home />} />  
        <Route path="/empresa" caseSensitive={false} element={<Empresa />} />
        <Route path="/contato" caseSensitive={false} element={<Contato />} />      
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
