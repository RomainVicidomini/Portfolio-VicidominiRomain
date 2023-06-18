import './contact.scss';
import marqueur from '../../assets/marqueur.png';
import telephone from '../../assets/telephone.png';
import message from '../../assets/message.png';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__cadre">
        <h2 className="contact__title">
          Me <span>Contacter</span>
        </h2>
        <h3 className="contact__title-3">
          Disponible à <span>Montreal</span> à partir du{' '}
          <span>18 septembre 2023</span>
        </h3>
        <div className="contact__content-info">
          <div className="contact__info">
            <img
              className="contact__content-icone"
              src={marqueur}
              alt="Adresse"
            />
            <h3>Montréal, Québec</h3>
          </div>
          <div className="contact__info">
            <img
              className="contact__content-icone"
              src={telephone}
              alt="telephone"
            />
            <h3>438-388-3901</h3>
          </div>
          <div className="contact__info">
            <img className="contact__content-icone" src={message} alt="mail" />
            <h3>romain.vicidomini@gmail.com</h3>
          </div>
        </div>
        <form className="contact__form">
          <input
            id="name"
            className="contact__form-content-input"
            type="text"
            placeholder="Nom"
            required
          />
          <input
            id="email"
            className="contact__form-content-input"
            type="email"
            placeholder="email"
            required
          />
          <input
            id="message"
            className="contact__form-content-input-message"
            type="text"
            placeholder="Votre message"
            required
          />
          <button type="submit" className="contact__submit-btn">
            Envoyer !
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
