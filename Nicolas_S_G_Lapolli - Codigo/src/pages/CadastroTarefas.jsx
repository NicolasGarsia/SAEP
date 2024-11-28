import NavB from "../components/Nav";
import "../css/nav.css";
import "../css/CadastroTarefas.css";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroTarefas() {
  const navigate = useNavigate();
  
  const [descricao, setDescricao] = useState('');
  const [setor, setSetor] = useState('');
  const [usuario, setUsuario] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novaTarefa = {
      descricao,
      setor,
      usuario,
      prioridade,
      status: 'A Fazer',
    };

    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasExistentes.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefasExistentes));

    setDescricao('');
    setSetor('');
    setUsuario('');
    setPrioridade('baixa');

    navigate('/');
  };

  return (
    <div>
      <NavB />
      <div className="form-container">
        <h2>Criar Nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="setor">Setor</label>
            <input
              type="text"
              id="setor"
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="prioridade">Prioridade</label>
            <select
              id="prioridade"
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
              className="input"
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Criar Tarefa</button>
        </form>
      </div>
    </div>
  );
}
