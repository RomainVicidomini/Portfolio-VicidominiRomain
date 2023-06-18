import './about.scss';
import React, { useState } from 'react';
import photo from '../../assets/images/photoprofil.jpg';
import icones from '../../data/icones';

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
      </div>
    </section>
  );
}

export default About;
