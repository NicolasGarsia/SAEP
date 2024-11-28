import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cadastro.css";

function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const submitCadastro = () => {
      localStorage.setItem("email", email);
      localStorage.setItem("nome", nome);
      navigate('/Login')
  };


  return (
    <>
      <div className="signBox">
      <div className="caixa">
        <h1>Cadastre-se</h1>
        <form>
          
           <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </form>
        <button
          className="signinEntrar"
          type="submit"
          onClick={() =>
            submitCadastro()
          }
        >
          Entrar
        </button>
        <p className="signinCadastro" onClick={() => navigate("/Login")}>Já tem conta? Faça login.</p>
      </div>
    </div>
    </>   

  );
}

export default Cadastro;
