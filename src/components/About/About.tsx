import './about.scss';
import React, { useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import photo from '../../assets/images/photoprofil.jpg';
import icones from '../../data/icones';

function About() {
  const aboutRef = useRef(null);
  const aboutRef2 = useRef(null);
  const [isClassToggled, setClassToggled] = useState(true);
  const handleButtonCLick = () => {
    if (!isClassToggled && aboutRef.current) {
      scroller.scrollTo('about', {});
    }
    if (isClassToggled && aboutRef2.current) {
      scroller.scrollTo('about-text', {});
    }
    setClassToggled(!isClassToggled);
  };
  return (
    <section ref={aboutRef} className="about" id="about">
      <div className="about__cadre">
        <h2 className="about__title">
          A <span>Propos</span>
        </h2>
        <div className="about__cadreImg" />
        <img className="about__img" src={photo} alt="profil" />
        <p className="about__text-2" id="about-text" ref={aboutRef2}>
          Après 5 années dans l’informatique industrielle et une formation
          développeur fullstack javascript, je souhaite mobilisé mes
          connaissances dans la constructions de sites web et web mobile
          repondant aux attentes des clients.
        </p>

        <div
          className="about__text-3 "
          style={{
            height: isClassToggled ? '0px' : '100%',
            padding: isClassToggled ? '0 0 ' : '2rem 4rem',
          }}
        >
          <p>
            Jeune français avec cinq années d'expérience dans le domaine de
            l'informatique industrielle et une formation approfondie en tant que
            développeur fullstack JavaScript, je suis enthousiaste à l'idée de
            mettre à profit mes compétences dans la construction de sites web et
            web mobiles répondant aux attentes des clients.
          </p>
          <p>
            Actuellement, je suis sur le point de terminer ma formation de
            développement web Fullstack JavaScript, spécialisée en React au sein
            de l'école O’clock. Cette formation m'a permis de consolider mes
            connaissances en programmation et de maîtriser les outils et les
            technologies essentiels pour la création d'applications web
            dynamiques et réactives. J'ai développé une solide compréhension des
            principes du développement front-end et back-end, ainsi que des
            bonnes pratiques en matière de conception et d'optimisation des
            sites web.
          </p>
          <p>
            Je suis convaincu que mon bagage technique et mes compétences en
            développement web me permettront de contribuer de manière
            significative à votre équipe. Je suis à l'aise pour travailler avec
            des frameworks tels que React et Node.js, ainsi qu'avec des
            technologies front-end comme HTML5, CSS3 et JavaScript.
          </p>
          <p>
            De plus, je souhaite vous informer que je déménagerai au Québec le
            14 septembre 2023. Ayant déjà commencé à me renseigner sur le marché
            de l'emploi local je suis vivement déterminé à m'intégrer rapidement
            dans une nouvelle équipe et à apporter ma contribution à la
            réalisation de projets web innovants et de qualité.
          </p>
          <p>
            Je suis une personne proactive, passionnée par le développement web
            et constamment à l'affût des dernières tendances et technologies du
            secteur. Mon approche méthodique, ma capacité à travailler en équipe
            et ma volonté d'apprendre en continu font de moi un candidat idéal
            pour le poste de développeur web.
          </p>
        </div>
        <button
          type="button"
          className="about__button"
          onClick={handleButtonCLick}
        >
          {isClassToggled ? 'En savoir plus' : 'Réduire'}
        </button>
      </div>
      <h2 className="about__title-2">
        Développeur fullstack javascript - Spé <span>React</span>
      </h2>
      <div className="about__slider">
        <div className="about__slide-track">
          {icones.map((icon) => (
            <img
              className="about__slide-img"
              key={icon.id}
              src={`${icon.src}`}
              alt={icon.alt}
            />
          ))}
          {icones.map((icon) => (
            <img
              className="about__slide-img"
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
