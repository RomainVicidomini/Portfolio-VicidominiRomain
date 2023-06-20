import './header.scss';
import { useRef, useEffect } from 'react';
import logo from '../../assets/menu.svg';

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const btnMenuRef = useRef<HTMLButtonElement>(null);
  const navBarRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const posHeader = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;
      const navBarElement = navBarRef.current;

      if (headerElement !== null) {
        if (currentScrollPos < 100) {
          headerElement.classList.remove('header__hidden');
        } else {
          headerElement.classList.add('header__hidden');
          navBarElement?.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', posHeader);
  }, []);
  const menuOnClick = () => {
    const navBarElement = navBarRef.current;
    navBarElement?.classList.toggle('active');
  };

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
        <h1 className="header__title">Romain.V</h1>
        <button ref={btnMenuRef} type="button" onClick={menuOnClick}>
          <img className="header__menu" src={logo} alt="Logo" />
        </button>
      </div>
      <nav ref={navBarRef} className="header__link">
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
