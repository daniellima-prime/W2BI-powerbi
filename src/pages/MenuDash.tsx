import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const senhaCorreta = "teste01";

  // Função que valida senha para botão OU clique da imagem
  const validarAcesso = (senhaDigitada) => {
    if (senhaDigitada === senhaCorreta) {
      navigate("/W2biMod");
    } else {
      setErro("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  // Clique no botão
  const handleAcessar = () => {
    validarAcesso(senha);
  };

  // 🔥 Clique na imagem → abre prompt → valida senha
  const handleImagemClick = () => {
    const senhaDigitada = prompt("Digite sua senha de acesso:");
    if (senhaDigitada !== null) {
      validarAcesso(senhaDigitada);
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

      <div className="logoW2bi">
        <img src="https://i.imgur.com/TKCH3mQ.png" alt="Logo W2BI" />
      </div>

      {/*<input
        type="password"
        placeholder="Entre com sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="input_dashMenuPrime"
      />

      <button className="button_dashMenuPrime" onClick={handleAcessar}>
        Entrar
      </button>

      {erro && <p className="home-error">{erro}</p>}
      */}
    </div>
  );
}

export default Home;
