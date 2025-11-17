import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const senhaCorreta = "teste01";

  // 🔥 Clique na imagem → abre prompt → valida senha
  const handleImagemClick = () => {
    const senhaDigitada = prompt("Digite sua senha de acesso:");
    if (senhaDigitada !== null) {
      if (senhaDigitada === senhaCorreta) {
        navigate("/W2biMod");
      } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
      }
    }
  };

  return (
    <div className="home-container_MenuDash">
      <div className="IconDashMenu" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HAlQoeU.png" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>

      <div className="IconDashMenu2" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HAlQoeU.png" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>
      <div className="IconDashMenu3" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HAlQoeU.png" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>
      <div className="IconDashMenu4" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HAlQoeU.png" 
          alt="CapaDashMenu"
          style={{ cursor: "pointer" }} 
        />
      </div>
      <div className="IconDashMenu5" onClick={handleImagemClick}>
        <img  
          src="https://i.imgur.com/HAlQoeU.png" 
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
