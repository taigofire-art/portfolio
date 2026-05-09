import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CaseBV from './pages/CaseBV';
import CaseMAAR from './pages/CaseMAAR';
import CaseCielo from './pages/CaseCielo';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/visao360" element={<CaseBV />} />
        <Route path="/case/petrobras" element={<CaseMAAR />} />
        <Route path="/case/realestate" element={<Navigate to="/" replace />} />
        <Route path="/case/maquininha" element={<CaseCielo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
