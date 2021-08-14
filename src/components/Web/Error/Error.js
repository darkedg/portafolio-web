import { HashLink } from 'react-router-hash-link';
import './Error.scss';
import error404 from '../../../assets/img/png/error404.png';

const Error = () => {

  return (
    <div className="error container">
      <h1>¡Oops! Página no encontrada</h1>
      <div className="error__img">
        <img src={error404} alt="Error 404" />
      </div>
      <p>La página que estás buscando no existe, comprueba que la URL sea la correcta.</p>
      <HashLink
        to="/#header"
        title="Volver a inicio"
        className="error__btn"
      >Volver al inicio</HashLink>
    </div>
  );
}

export default Error;