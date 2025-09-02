import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 border-b border-gray-300 dark:border-gray-700">
      <span className="text-xl" style={{ color: '#65c88c' }}>
        Original Clothing
      </span>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/images/OClogo.png" alt="Logo" className="h-8 w-8" />
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/store" className="hover:underline">
          Store
        </Link>
        <Link to="/team" className="hover:underline">
          Our Team
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center space-y-4 py-4 shadow-lg z-10">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/store" onClick={() => setMenuOpen(false)}>
            Store
          </Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>
            Our Team
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
