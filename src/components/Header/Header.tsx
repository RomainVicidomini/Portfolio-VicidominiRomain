import './header.scss';
import { useRef, useEffect } from 'react';
import logo from '../../assets/menu.svg';

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const posHeader = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;
      if (headerElement !== null) {
        if (currentScrollPos < 100) {
          headerElement.classList.remove('header__hidden');
        } else {
          headerElement.classList.add('header__hidden');
        }
      }
    };

    window.addEventListener('scroll', posHeader);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header__left">
        <button type="button">
          <img className="header__menu" src={logo} alt="Logo" />
        </button>
        <a href="#" className="header__logo">
          Romain.V
        </a>
      </div>
      <nav className="header__link">
        <a href="#home" className="header__active">
          Accueil
        </a>
        <a href="#about">A propos</a>
        <a href="#education">Expériences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <button type="button" className="header__resume">
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
