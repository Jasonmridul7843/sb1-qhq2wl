import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Music className="w-8 h-8 mr-2 text-accent" />
          <span className="font-bold text-xl text-accent">Alvan Al Rakib</span>
        </div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Music', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition duration-300">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;