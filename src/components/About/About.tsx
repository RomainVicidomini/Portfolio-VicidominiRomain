import './about.scss';
import React, { useState } from 'react';
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
  const [isClassToggled, setClassToggled] = useState(false);
  const handleButtonCLick = () => {
    setClassToggled(!isClassToggled);
  };
  return (
    <section className="about" id="about">
      <div className="about__cadre">
        <h2 className="about__title">
          A <span>Propos</span>
        </h2>
        <div className="about__cadreImg" />
        <img className="about__img" src={photo} alt="profil" />
        <p className="about__text-2">
          Après 5 années dans l’informatique industrielle et une formation
          développeur fullstack javascript, je souhaite mobilisé mes
          connaissances dans la constructions de sites web et web mobile
          repondant aux attentes des clients.
        </p>
        <p className={`about__text-2 ${isClassToggled ? 'maClasse' : ''}`}>
          Après 5 années dans l’informatique industrielle et une formation
          développeur fullstack javascript, je souhaite mobilisé mes
          connaissances dans la constructions de sites web et web mobile
          repondant aux attentes des clients.
        </p>
        <button
          type="button"
          className="about__button"
          onClick={handleButtonCLick}
        >
          En savoir plus
        </button>
        <h2 className="about__title-2">
          Développeur fullstack javascript - Spé <span>React</span>
        </h2>
        <div className="about__slider">
          <div className="about__slide-track">
            {icones.map((icon) => (
              <img
                className="about__slide-img"
                key={icon.id}
                src={icon.src}
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
      </div>
    </section>
  );
}

export default About;
