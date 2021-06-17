import Card from '../../Card';

import './Skills.scss';

const Skills = ({ skills }) => {
  const { title, skill } = skills;

  return (
    <div className="skills-container container" id="skills">
      <div className="title">
        <h1>{title}</h1>
        <div className="barra"></div>
      </div>
      {skill.map(item => {
        const { _id, text, tecnol } = item;
        return (
          <div key={_id} className="skills-container__cards">
            <h2>{text}</h2>
            <Card tecnol={tecnol} />
          </div>
        )
      })}
    </div>
  );
};

export default Skills;
