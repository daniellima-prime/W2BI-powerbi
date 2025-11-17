import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import W2biMod from "./pages/W2biMod";
import MenuDash from "./pages/MenuDash"; // <-- IMPORTOU A NOVA PÁGINA
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/W2biMod" element={<W2biMod />} />
        <Route path="/menudash" element={<MenuDash />} /> {/* <-- ROTA NOVA */}
      </Routes>
    </Router>
  );
}

export default App;
