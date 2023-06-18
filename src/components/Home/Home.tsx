import './home.scss';
import logoLinkedin from '../../assets/linkedin.svg';
import logoGithub from '../../assets/github.svg';
import fleche from '../../assets/fleche-bas.png';
import fond from '../../assets/images/fond2.jpg';

function Home() {
  return (
    <section id="home">
      <img className="img-background" src={fond} alt="background" />
      <div className="home">
        <div className="home__content">
          <div className="home__name">
            <h1>Romain Vicidomini</h1>
          </div>
          <div className="home__text-animate">
            <h3 className="home__title-1">Développeur</h3>
          </div>
          <h3 className="home__title-3">
            Disponible à <span>Montreal</span> à partir du{' '}
            <span>18 septembre 2023</span>
          </h3>
        </div>
        <div className="home__linkfleche">
          <a href="#about" className="home__text">
            <p>Par ici pour en apprendre plus sur moi</p>
            <img
              className="home__fleche"
              src={fleche}
              alt="fleche vers le bas"
            />
          </a>
        </div>
        <div className="home__link">
          <a href="https://www.linkedin.com/in/romain-vicidomini-390809135/">
            <img
              className="home__linkimg"
              src={logoGithub}
              alt="lien vers Github"
            />
          </a>
          <a href="https://github.com/RomainVicidomini/">
            <img
              className="home__linkimg"
              src={logoLinkedin}
              alt="lien vers linkedin"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
