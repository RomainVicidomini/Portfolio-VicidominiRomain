import './experience.scss';
import calendar from '../../assets/icones/calendrier-50.png';
import university from '../../assets/university.png';
import affaire from '../../assets/affaire.png';

function Experience() {
  return (
    <section className="experience" id="education">
      <h2 className="experience__titre">
        Mon <span>Experience</span>
      </h2>
      <div className="experience__row">
        <div className="experience__column">
          <div className="experience__column-div-title">
            <img
              className="experience__logo-title"
              src={university}
              alt="logo university"
            />
            <h3 className="experience__colum-title">Formations</h3>
          </div>
          <div className="experience__box">
            <div className="experience__box-content">
              <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript">
                <div className="experience__content">
                  <div className="experience__content-date">
                    <img
                      className="experience__content-icone"
                      src={calendar}
                      alt=""
                    />
                    <p>Février 2023 - Aout 2023</p>
                  </div>
                  <h2 className="experience__content-title">
                    Formation développeur web - Fullstack JS
                  </h2>
                  <p className="experience__content-subtitle">
                    Ecole O&#39;clock
                  </p>
                  <h4>Le Socle Développement Web (476 heures) :</h4>
                  <h4>Front-end :</h4>
                  <ul>
                    <li>- HTML5</li>
                    <li>- CSS3</li>
                    <li>- Javascript ES6</li>
                  </ul>
                  <h4>Back-end :</h4>
                  <ul>
                    <li>- Node.js</li>
                    <li>- Express.js</li>
                  </ul>
                  <h4>Système de Gestion de Base de Données :</h4>
                  <ul>
                    <li>- SQL</li>
                    <li>- PostgreSQL</li>
                  </ul>
                  <h4>CMS :</h4>
                  <ul>
                    <li>- Strapi</li>
                  </ul>
                  <h4>Architecture :</h4>
                  <ul>
                    <li>- SoC</li>
                    <li>- MVC</li>
                    <li>- ORM : Data Mapper, Active Record (Sequelize)</li>
                    <li>- API REST</li>
                  </ul>
                  <h4>Environnement de développement :</h4>
                  <ul>
                    <li>- Git</li>
                    <li>- Github</li>
                  </ul>
                  <h4>
                    Spécialisation<span> REACT </span>(168 heures)
                  </h4>
                  <span>L’apothéose, réalisation d’un projet (154 heures)</span>
                </div>
              </a>
              <div className="experience__content">
                <div className="experience__content-date">
                  <img
                    className="experience__content-icone"
                    src={calendar}
                    alt=""
                  />
                  <p>2016 - 2017</p>
                </div>
                <h2 className="experience__content-title">
                  Licence Systèmes Automatisés, Réseaux et Informatique
                  Industrielle
                </h2>
                <p className="experience__content-subtitle">
                  Institut Universitaire de Technologie, Bordeaux
                </p>
              </div>
              <div className="experience__content">
                <div className="experience__content-date">
                  <img
                    className="experience__content-icone"
                    src={calendar}
                    alt=""
                  />
                  <p>2014 - 2016</p>
                </div>
                <h2 className="experience__content-title">
                  DUT Génie Electrique et Informatique Industrielle
                </h2>
                <p className="experience__content-subtitle">
                  Institut Universitaire de Technologie, Angoulême
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience__column">
          <div className="experience__column-div-title">
            <img
              className="experience__logo-title"
              src={affaire}
              alt="logo affaire"
            />
            <h3 className="experience__colum-title">Experience</h3>
          </div>
          <div className="experience__box">
            <div className="experience__box-content">
              <div className="experience__content">
                <div className="experience__content-date">
                  <img
                    className="experience__content-icone"
                    src={calendar}
                    alt=""
                  />
                  <p>01 Nov 2019 - 31 Oct 2022</p>
                </div>
                <h2 className="experience__content-title">
                  Technicien Bureau etudes automatisme
                </h2>
                <h4>Conception de machines spéciales et attraction.</h4>
                <p className="experience__content-subtitle">
                  INGELIANCE, Gond-Pontouvre, Charente
                </p>
                <h4>Automate programmable : </h4>
                <ul>
                  <li>- Schneider</li>
                  <li>- Siemens</li>
                  <li>- Beckhoff</li>
                </ul>
                <h4>Réseaux : </h4>
                <ul>
                  <li>- Ehternet/IP</li>
                  <li>- Modbus</li>
                  <li>- CanOpen</li>
                  <li>- Profinet</li>
                </ul>
                <h4>Variateurs de vitesse : </h4>
                <ul>
                  <li>- Schneider</li>
                  <li>- Stober</li>
                </ul>
                <h4>Robotique : </h4>
                <ul>
                  <li>- Fanuc</li>
                </ul>
                <span>Compétences</span> : Automate programmable industriel ·
                Interfaces homme-machine · Automation
              </div>
              <div className="experience__content">
                <div className="experience__content-date">
                  <img
                    className="experience__content-icone"
                    src={calendar}
                    alt=""
                  />
                  <p>01 Mars 2018 - 01 Nov 2019</p>
                </div>
                <h2 className="experience__content-title">
                  Technicien Bureau etudes automatisme
                </h2>
                <p className="experience__content-subtitle">
                  SINEX INDUSTRIE, La Couronne, Charente
                </p>
                <ul>
                  <li>- Automatisme : Siemens, Unilogic</li>
                  <li>- Electrique : See Electrical, Cablage armoire</li>
                </ul>
              </div>
              <div className="experience__content">
                <div className="experience__content-date">
                  <img
                    className="experience__content-icone"
                    src={calendar}
                    alt=""
                  />
                  <p>01 Juillet 2016 - 01 Fevrier 2018</p>
                </div>
                <h2 className="experience__content-title">
                  Technicien Bureau etudes automatisme
                </h2>
                <p className="experience__content-subtitle">
                  Engie, Contrat professionnalisation et Interim, Bordeaux
                </p>
                <ul>
                  <li>- Automatisme : Trend (maintenance)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
