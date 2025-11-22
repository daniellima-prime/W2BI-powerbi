import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const senhaCorreta = "teste01";           // Página 1
  const senhaCorreta2 = "teste02";     // Página 2

  // 🔥 Função 1: Acessar DashGestaoNotas
  const handleImagemClick = () => {
    const senhaDigitada = prompt("Digite sua senha de acesso:");
    if (senhaDigitada !== null) {
      if (senhaDigitada === senhaCorreta) {
        navigate("/DashGestaoNotas");
      } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
      }
    }
  };

  // 🔥 Função 2: Acessar outra página (Ex: DashFinanceiro)
  const handleImagemClick2 = () => {
    const senhaDigitada = prompt("Digite a senha de acesso financeiro:");
    if (senhaDigitada !== null) {
      if (senhaDigitada === senhaCorreta2) {
        navigate("/dashAbsenteismo");
      } else {
        alert("Senha inválida. Tente novamente.");
      }
    }
  };

  return (
    <div className="home-container_MenuDash">

      {/* PRIMEIRA FUNÇÃO */}
      <div className="IconDashMenu" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/NrwwGjF.jpeg" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>

      {/* SEGUNDA FUNÇÃO → NOVA PÁGINA */}
      <div className="IconDashMenu2" onClick={handleImagemClick2}>
        <img  
          src="https://i.imgur.com/4Qs2fTq.jpeg" 
          alt="CapaDashMenu2"
          style={{ cursor: "pointer" }} 
        />
      </div>

      {/* As demais mantêm a função antiga ou podem ser trocadas */}
      <div className="IconDashMenu3" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HhDDBbp.jpeg" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>

      <div className="IconDashMenu4" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/OJX8c5p.jpeg" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>

      <div className="IconDashMenu5" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/GUVrTgP.jpeg" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>

      <div className="logoW2bi">
        <img src="https://i.imgur.com/TKCH3mQ.png" alt="Logo W2BI" />
      </div>

    </div>
  );
}

export default Home;
