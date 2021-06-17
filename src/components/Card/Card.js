import './Card.scss';

const Card = ({ tecnol }) => {

  return (
    <div className="card-container">
      {tecnol.map((data, index) => {
        const { logo, name } = data;        
        return (
          <div key={index} className="card-container__bar">
            <img src={logo} alt={name} />
            <p>{name}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Card;
