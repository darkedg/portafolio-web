
import data from '../../../data';

import './About.scss';

const About = () => {
  return (
    <div className="about-container container">
      <div className="title">
        <h1>{data.about.title}</h1>
        <div className="barra"></div>
      </div>
      <div className="about-container__text">
        {data.about.desc.map((item, index) => {
          return (
            <p key={index}>{item.text}</p>
          )
        })}
      </div>
      <div className="about-container__btn">
        <a
          href={data.about.cv}
          rel="noreferrer"
          target="_blank"
          title="Ver Currículum"
        >{data.about.btnText}</a>
      </div>
    </div>
  );
};

export default About;
