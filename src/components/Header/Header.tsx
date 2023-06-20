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

  const handleDownload = () => {
    fetch('CV_RomainVicidomini.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_RomainVicidomini.pdf';
        alink.click();
      });
    });
  };
  return (
    <header ref={headerRef} className="header">
      <div className="header__left">
        <button type="button">
          <img className="header__menu" src={logo} alt="Logo" />
        </button>
        <h1 className="header__title">Romain.V</h1>
      </div>
      <nav className="header__link">
        <a href="#home" className="header__active">
          Accueil
        </a>
        <a href="#about">A propos</a>
        <a href="#education">Expériences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <button
          type="button"
          onClick={handleDownload}
          className="header__resume"
        >
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
