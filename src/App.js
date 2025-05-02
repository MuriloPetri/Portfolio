import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

// Páginas
const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));

// Componente de redirecionamento
function RedirectToExternal() {
  const { id } = useParams();

  useEffect(() => {
    if (id === '2') {
      window.location.replace('https://projeto-octa.onrender.com/');
    } else if (id === '1') {
      window.location.replace('https://miseraveis.shop/');
    } else {
      window.location.replace('/'); // fallback para a home
    }
  }, [id]);

  return null; // O componente não renderiza nada
}

function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={<div>Carregando...</div>}> {/* Fallback mais explícito */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/single-project/:id" element={<RedirectToExternal />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
