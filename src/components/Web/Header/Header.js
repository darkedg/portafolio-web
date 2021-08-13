import { useEffect, useRef } from 'react';
import { init } from 'ityped';

import './Header.scss';

const Header = ({ header }) => {
  const { img, imgPlaceholder, text, btnText,  } = header;

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Front End Developer", "Diseñador Web"],
    });
  }, []);

  return (
    <div className="header-container" id="header">      
      <div className="header-container__name">
        <h1>
          {text[0]}
          <br />
          {text[1]}
        </h1>
        <h2>
          {text[2]} <span ref={textRef}></span>
        </h2>
        <br />
        <br />
        <a
          href="#about"
          title="Ir a la sección 'Sobre Mí'"
          className="header-container__scroll"
          id="about"
        >{btnText}</a>
      </div>
      <div className="header-container__img">
        <img src={img} alt={imgPlaceholder} />
      </div>
    </div>
  );
};

export default Header;
