import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavB({}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  

  return (
    <div id="Nav">
      <div id="Box">
        <div >
        <h1 className="user" >Suas Tarefas</h1>
        </div>
      </div>

      <div className="nav-area">
        <ul>
        <li onClick={() => navigate("/CadastroTarefas")}>CadastreTarefas</li>
        <li onClick={() => navigate("/")}>Suas Tarefas</li>

        </ul>
      </div>
    </div>
  );
}
