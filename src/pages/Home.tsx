import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Certifique-se que App.css contém a classe .circulo

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // estado para o e-mail
  const [senha, setSenha] = useState(""); // estado para a senha
  const [erro, setErro] = useState("");

  const handleAcessar = () => {
    const emailCorreto = "teste@consultoriaprime.com"; // e-mail fixo para teste
    const senhaCorreta = "12345";               // senha fixa para teste

    if (email === emailCorreto && senha === senhaCorreta) {
      navigate("/report"); // redireciona se email e senha estiverem corretos
    } else {
      setErro("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="home-container">
      <div className="fundo"></div>
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
