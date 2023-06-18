import './header.scss';
import logo from '../../assets/menu.svg';

function Header() {
  window.onscroll = function posHeader() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
      document.querySelector('header').classList.remove('header__hidden');
    } else {
      document.querySelector('header').classList.add('header__hidden');
    }
  };
  return (
    <header className="header">
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
