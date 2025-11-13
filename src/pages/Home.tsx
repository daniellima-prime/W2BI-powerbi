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
      navigate("/report");
    } else {
      setErro("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  return (
    
    <div className="home-container">
      <div className="circulo"></div>

      <h1 className="home-title">Bem-vindo a Works2BI</h1>

      <input
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="home-input"
      />
      <input
        type="password"
        placeholder="senha"
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
