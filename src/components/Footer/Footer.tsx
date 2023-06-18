import './footer.scss';
import fleche from '../../assets/fleche-bas.png';

function Footer() {
  return (
    <footer>
      <p>Réalisé par Romain Vicidomini @2023</p>
      <a href="#home">
        Remonter en haut de page
        <img className="footer__fleche" src={fleche} alt="fleche vers le bas" />
      </a>
    </footer>
  );
}

export default Footer;
