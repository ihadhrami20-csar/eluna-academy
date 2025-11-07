import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onSignUpClick: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-turquoise transition-colors duration-300">{children}</a>
);

const Header: React.FC<HeaderProps> = ({ onSignUpClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">Elena Academy</a>
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Courses</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>
        <div className="hidden lg:block">
          <button
            onClick={onSignUpClick}
            className="bg-gradient-button text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-ocean-blue/95 backdrop-blur-sm px-6 pb-4">
          <nav className="flex flex-col space-y-4 text-center">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Courses</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
            <button
              onClick={onSignUpClick}
              className="bg-gradient-button text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-4"
            >
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
