import './Project.scss';

const Project = ({ projects }) => {
  console.log(projects);
  
  return (
    <div className="projects container">
      <div className="title">
        <h1>Projectos realizados</h1>
        <div className="barra"></div>
      </div>

      <div className="d-flex" style={{ marginTop: "1.5rem" }}>
        {projects.map(({ _id, name, desc, img, prog, links }) => (
          <div className="card responsive-flex-column" key={_id}>
            <img src={img} alt={name} className="card-image" />

            <div className="card-body">
              <div className="titulo">
                <h2>{name}</h2>
              </div>

              <p>{desc}</p>
              <div className="progres">
                {prog.map(({des}, index) => (
                  <p key={index}>{des}</p>
                ))}
              </div>
              <nav className="comp">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </nav>
            </div>
          </div>
        ))}
        {/* card */}
      </div>
    </div>
  );
};

export default Project;
