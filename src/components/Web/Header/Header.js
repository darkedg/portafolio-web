import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import data from '../../../data';

import './Header.scss';

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Front End Developer", "Diseñador Web", "Programador Móvil"],
    });
  }, []);

  return (
    <div className="header-container">      
      <div className="header-container__name">
        <h1>
          {data.header.text[0]}
          <br />
          {data.header.text[1]}
        </h1>
        <h2>
          {data.header.text[2]} <span ref={textRef}></span>
        </h2>
        <br />
        <br />
        <a
          href="#about"
          title="Ir a la sección 'Sobre Mí'"
          className="header-container__scroll"
          id="about"
        >{data.header.btnText}</a>
      </div>
      <div className="header-container__img">
        <img src={data.header.img} alt={data.header.imgPlaceholder} />
      </div>
    </div>
  );
};

export default Header;
