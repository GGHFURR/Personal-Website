import './pages/nav.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExperienceScreen from './ExperienceScreen';
import ServiceScreen from './ServiceScreen';
import ContactScreen from './ContactScreen';
import PortofolioScreen from './PortofolioScreen';

const Home = lazy(() => import('./pages/about'));
const About = lazy(() => import('./pages/experience'));
const Header = lazy(() => import('./pages/header'));
const Footer = lazy(() => import('./pages/footer'));
const Nav = lazy(() => import('./pages/nav'));


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperienceScreen />} />
        <Route path="/service" element={<ServiceScreen />} />
        <Route path="/portofolio" element={<PortofolioScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
      <Nav />
      <Footer />
    </Suspense>
  </Router>
);

export default App