import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import TeamPage from './pages/TeamPage';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <ThemeToggle />
      </div>
    </Router>
  );
};

export default App;