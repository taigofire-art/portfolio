import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseBV from './pages/CaseBV';
import CaseMAAR from './pages/CaseMAAR';
import CaseCielo from './pages/CaseCielo';
import CaseComingSoon from './pages/CaseComingSoon';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/visao360" element={<CaseBV />} />
        <Route path="/case/petrobras" element={<CaseMAAR />} />
        <Route path="/case/realestate" element={
          <CaseComingSoon
            title="Transformação Digital de Gestão de Imóveis"
            subtitle="Pátria Investments · Salesforce · Service Design"
            prev="/case/petrobras"
            prevTitle="Sistema de Avaliação de Mérito"
            next="/case/maquininha"
            nextTitle="Área de Ajuda na Maquininha"
          />
        } />
        <Route path="/case/maquininha" element={<CaseCielo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
