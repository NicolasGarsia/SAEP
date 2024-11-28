import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Cadastro from './Pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
import GerenciamentoTarefas from './Pages/GerenciamentoTarefas.jsx';
import CadastroTarefas from './pages/CadastroTarefas.jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>

      <Route path='/Cadastro' element={<Cadastro/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/' element={<GerenciamentoTarefas/>} />
      <Route path='/CadastroTarefas' element={<CadastroTarefas/>} />


      </Routes>
    </Router>
      
    </>
  )
}

export default App
