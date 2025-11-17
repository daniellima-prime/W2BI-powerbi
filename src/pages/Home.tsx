import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // estado para o e-mail
  const [senha, setSenha] = useState(""); // estado para a senha
  const [erro, setErro] = useState("");

  const handleAcessar = () => {
    const emailCorreto = "teste@consultoriaprime.com";
    const senhaCorreta = "12345";

    if (email === emailCorreto && senha === senhaCorreta) {
      navigate("/MenuDash");
    } else {
      setErro("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  return (
    
    <div className="home-container">
      {/*<div className="circulo"></div>*/}

      {/*
        <div className="fundo2bi">
          <img  
            src="https://i.imgur.com/2kBIYxf.png" 
            alt="Logo Works2BI"
            className="home-logo"
          />
        </div>
      */}

      {/*<img 
          src="https://i.imgur.com/ziZgBmD.png" 
          alt="Logo Works2BI"
          className="home-logo"
        />
      */}

      {/*<h1 className="home-title">Bem-vindo a Works2BI</h1>*/}

      <input
        type="email"
        placeholder="Entre com seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="home-input"
      />
      <input
        type="password"
        placeholder="Entre com sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="home-input"
      />

      <button className="home-button" onClick={handleAcessar}>
        Entrar
      </button>

      {erro && <p className="home-error">{erro}</p>}
    </div>
  );
}

export default Home;
