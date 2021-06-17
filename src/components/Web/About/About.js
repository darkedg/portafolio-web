
import './About.scss';

const About = ({ about }) => {
  const { title, desc, btnText, cv } = about;

  return (
    <div className="about-container container">
      <div className="title">
        <h1>{title}</h1>
        <div className="barra"></div>
      </div>
      <div className="about-container__text">
        {desc.map((item, index) => {
          return (
            <p key={index}>{item.text}</p>
          )
        })}
      </div>
      <div className="about-container__btn">
        <a
          href={cv}
          rel="noreferrer"
          target="_blank"
          title="Ver Currículum"
        >{btnText}</a>
      </div>
    </div>
  );
};

export default About;
