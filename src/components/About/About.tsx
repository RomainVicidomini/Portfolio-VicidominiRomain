import './about.scss';
import React, { useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import photo from '../../assets/images/photoprofil.jpg';

import icone1 from '../../assets/icones/react.svg';
import icone2 from '../../assets/icones/typescript.svg';
import icone3 from '../../assets/icones/nextjs.svg';
import icone4 from '../../assets/icones/javascript.svg';
import icone5 from '../../assets/icones/html.svg';
import icone6 from '../../assets/icones/css.svg';
import icone7 from '../../assets/icones/nodejs.svg';
import icone8 from '../../assets/icones/bootstrap.svg';
import icone9 from '../../assets/icones/tailwind-css.svg';
import icone10 from '../../assets/icones/sass.svg';
import icone11 from '../../assets/icones/postgresql.svg';

const icones = [
  {
    id: 1,
    src: icone1,
    alt: 'Image react',
    label: 'React',
  },
  {
    id: 11,
    src: icone2,
    alt: 'Image typescript',
    label: 'Typescript',
  },
  {
    id: 2,
    src: icone3,
    alt: 'Image nextjs',
    label: 'Next.js',
  },
  {
    id: 3,
    src: icone4,
    alt: 'Image javascript',
    label: 'Javascript',
  },
  {
    id: 4,
    src: icone5,
    alt: 'Image html',
    label: 'html',
  },
  {
    id: 5,
    src: icone6,
    alt: 'Image css',
    label: 'css',
  },
  {
    id: 6,
    src: icone7,
    alt: 'Image nodejs',
    label: 'Node.js',
  },
  {
    id: 7,
    src: icone8,
    alt: 'Image bootstrap',
    label: 'Bootstrap',
  },
  {
    id: 8,
    src: icone9,
    alt: 'Image tailwind',
    label: 'Tailwind',
  },
  {
    id: 9,
    src: icone10,
    alt: 'Image sass',
    label: 'Sass',
  },
  {
    id: 10,
    src: icone11,
    alt: 'Image postgresql',
    label: 'Postgresql',
  },
];

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
          }}
        >
          <p>
            Jeune français avec cinq années d&apos;expérience dans le domaine de
            l&apos;informatique industrielle et une formation approfondie en
            tant que développeur fullstack JavaScript, je suis enthousiaste à
            l&apos;idée de mettre à profit mes compétences dans la construction
            de sites web et web mobiles répondant aux attentes des clients.
          </p>
          <p>
            Actuellement, je suis sur le point de terminer ma formation de
            développement web Fullstack JavaScript, spécialisée en React au sein
            de l&apos;école O’clock. Cette formation m&apos;a permis de
            consolider mes connaissances en programmation et de maîtriser les
            outils et les technologies essentiels pour la création
            d&apos;applications web dynamiques et réactives. J&apos;ai développé
            une solide compréhension des principes du développement front-end et
            back-end, ainsi que des bonnes pratiques en matière de conception et
            d&apos;optimisation des sites web.
          </p>
          <p>
            Je suis convaincu que mon bagage technique et mes compétences en
            développement web me permettront de contribuer de manière
            significative à votre équipe. Je suis à l&apos;aise pour travailler
            avec des frameworks tels que React et Node.js, ainsi qu&apos;avec
            des technologies front-end comme HTML5, CSS3 et JavaScript.
          </p>
          <p>
            De plus, je souhaite vous informer que je déménagerai au Québec le
            14 septembre 2023. Ayant déjà commencé à me renseigner sur le marché
            de l&apos;emploi local je suis vivement déterminé à m&apos;intégrer
            rapidement dans une nouvelle équipe et à apporter ma contribution à
            la réalisation de projets web innovants et de qualité.
          </p>
          <p>
            Je suis une personne proactive, passionnée par le développement web
            et constamment à l&apos;affût des dernières tendances et
            technologies du secteur. Mon approche méthodique, ma capacité à
            travailler en équipe et ma volonté d&apos;apprendre en continu font
            de moi un candidat idéal pour le poste de développeur web.
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
