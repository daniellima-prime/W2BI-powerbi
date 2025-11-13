import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Certifique-se que App.css contém a classe .circulo

function Home() {
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleAcessar = () => {
    const senhaCorreta = "12345"; // 🔒 senha definida
    if (senha === senhaCorreta) {
      navigate("/report");
    } else {
      setErro("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="home-container">
      {/* Círculo no topo */}
      <div className="circulo"></div>

      <h1 className="home-title">Bem-vindo ao Painel Power BI</h1>
      <p className="home-subtitle">Insira a senha para acessar o relatório</p>

      <input
        type="password"
        placeholder="Digite a senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="home-input"
      />

      <button className="home-button" onClick={handleAcessar}>
        Ir para
      </button>

      {erro && <p className="home-error">{erro}</p>}
    </div>
  );
}

export default Home;
