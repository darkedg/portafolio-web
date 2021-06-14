import data from '../../../data';
import Card from '../../Card';

import './Skills.scss';

const Skills = () => {
  return (
    <div className="skills-container container" id="skills">
      <div className="title">
        <h1>{data.skills.title}</h1>
        <div className="barra"></div>
      </div>
      {data.skills.skill.map((item) => {
        return (
          <div key={item._id} className="skills-container__cards">
            <h2>{item.text}</h2>
            <Card item={item.tecnol} />
          </div>
        )
      })}
    </div>
  );
};

export default Skills;
