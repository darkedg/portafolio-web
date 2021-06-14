import './Card.scss';

const Card = ({ item }) => {

  return (
    <div className="card-container">
      {item.map((data, index) => {
        return (
          <div key={index} className="card-container__bar">
            <img src={data.logo} alt={data.name} />
            <p>{data.name}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Card;
