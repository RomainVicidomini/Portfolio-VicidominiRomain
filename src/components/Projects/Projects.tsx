import './projects.scss';
import projets from '../../data/data';

function Projects() {
  return (
    <section className="projects" id="projets">
      <div className="projects__cadre">
        <h2 className="projects__title">
          Mes <span>Projets</span>
        </h2>
        <div className="projects__gallery">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="projects__card-container"
              style={{
                opacity: projet.isEncours ? '1' : '0.5',
              }}
            >
              <h2>{projet.name}</h2>
              <p>{projet.description}</p>
              <button
                style={{
                  display: projet.isEncours ? '' : 'none',
                }}
                type="button"
              >
                {projet.isEncours ? 'Découvrir' : 'A venir'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
