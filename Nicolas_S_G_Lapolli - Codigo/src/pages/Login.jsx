import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [nomeUser, setNomeUser] = useState("");

  useEffect(() => {
    setEmailUser(localStorage.getItem('email'))
    setNomeUser(localStorage.getItem('nome'))
  }, [])

  const submitLogin = () => {
    if (email == emailUser && nome == nomeUser) { 
      sessionStorage.setItem("isLoggedOn", 'true');
      navigate('/')
      console.log('funcionou')
    } else window.alert("Este não e seu nome");
  };
  return (
    <>
    <div className="signBox">
        <div className="centro">
      <div className="caixa">
        <h1>Login</h1>
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
            submitLogin()
          }
        >
          Entrar
        </button>
        <p className="signinCadastro" onClick={() => navigate('/Cadastro')}>Não tem conta? Cadastre-se</p>
      </div></div>
    </div>
    </>
  );
}

export default Login;
