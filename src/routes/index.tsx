import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from '../pages/Home'
import GuiaPage from '../pages/Guia'
import MonitoramentoPage from '../pages/Monitoramento'
import AlertaPage from '../pages/Alertas'

//layouts
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'

export function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guia" element={<GuiaPage />} />
        <Route path="/monitoramento" element={<MonitoramentoPage />} />
        <Route path="/alerta" element={<AlertaPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}