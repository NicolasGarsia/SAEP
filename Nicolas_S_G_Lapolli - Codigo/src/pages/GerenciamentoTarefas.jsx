import NavB from "../components/Nav";
import "../css/nav.css";
import "../css/GerenciamentoTarefas.css";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GerenciamentoTarefas() {
  const navigate = useNavigate();
  const [isLoggedOn, setIsLoggedOn] = useState("default");
  const redirect = () => {
    navigate("./Login");
  };

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTarefas(tarefasExistentes);
  }, []);

  const handleEditar = (index) => {
    const tarefa = tarefas[index];
    navigate('/editar', { state: { tarefa, index } });
  };

  const handleExcluir = (index) => {
    const tarefasExistentes = tarefas.filter((_, i) => i !== index);
    localStorage.setItem('tarefas', JSON.stringify(tarefasExistentes));
    setTarefas(tarefasExistentes);
  };

  const handleAlterarStatus = (index, novoStatus) => {
    const tarefasExistentes = [...tarefas];
    const tarefa = tarefasExistentes[index];
    tarefa.status = novoStatus;
    localStorage.setItem('tarefas', JSON.stringify(tarefasExistentes));
    setTarefas(tarefasExistentes);
  };

  useEffect(() => {
    setIsLoggedOn(sessionStorage.getItem("isLoggedOn"));
  }, []);

  useEffect(() => {
    if (isLoggedOn == "true") {
      return console.log("logado");
    } else if (isLoggedOn == "default") {
      console.log("await");
    } else redirect();
  }, [isLoggedOn]);

  return (
    <div>
      <NavB />
      <div className="tarefas-list">
        {tarefas.map((tarefa, index) => (
          <div key={index} className="tarefa-box">
            <h3>{tarefa.descricao}</h3>
            <p><strong>Setor:</strong> {tarefa.setor}</p>
            <p><strong>Usuário:</strong> {tarefa.usuario}</p>
            <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>
            
            <strong>Status:</strong>
            <select
              value={tarefa.status}
              onChange={(e) => handleAlterarStatus(index, e.target.value)}
            >
              <option value="A Fazer">A Fazer</option>
              <option value="Fazendo">Fazendo</option>
              <option value="Concluído">Concluído</option>
            </select>
            
            <div className="tarefa-actions">
              <button onClick={() => handleEditar(index)}>Editar</button>
              <button onClick={() => handleExcluir(index)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
