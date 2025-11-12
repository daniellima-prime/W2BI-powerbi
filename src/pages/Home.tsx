import { useNavigate } from "react-router-dom";
import "../App.css"; // ou o caminho correto do seu arquivo CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Painel Power BI</h1>
      <p className="home-subtitle">
        Clique abaixo para acessar o relatório interativo
      </p>
      <button
        className="home-button"
        onClick={() => navigate("/report")}
      >
        Acessar Relatório
      </button>
    </div>
  );
}

export default Home;
