import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import data from '../../../data';

import './Navbar.scss';

const Navbar = ({ isScrolling }) => {

  const [clicked, setClicked] = useState(false);
  const { nav: { logo, links } } = data;

  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo" onClick={tothetop}>
        <span className="navbar__logo--span ">&#60;&#47;&#62;{logo}</span>
      </div>
      <ul className={clicked ? "navbar__items active" : "navbar__items"}>
        {links.map(item => {
          const { _id, to, text } = item;
          return (
            <li
              key={_id}
              className="navbar__items--section connections"
              onClick={handleClick}
            >
              <HashLink to={to} className="connections__link">
                {text}
              </HashLink>
            </li>
          )
        })}
      </ul>
      <i
        alt="Menú"
        className={
          clicked
            ? "fas fa-times navbar__items--burger-nav"
            : "fas fa-bars navbar__items--burger-nav"
        }
        onClick={handleClick}
      ></i>
    </nav>
  );
};

export default Navbar;
