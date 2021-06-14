import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data';

import './Navbar.scss';

const Navbar = ({ isScrolling }) => {

  const [clicked, setClicked] = useState(false);

  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo" onClick={tothetop}>
        E
        <span className="navbar__logo--span ">MG*</span>
      </div>
      <ul className={clicked ? "navbar__items active" : "navbar__items"}>
        {data.nav.links.map(item => {
          return (
            <li
              key={item._id}
              className="navbar__items--section connections"
              onClick={handleClick}
            >
              <Link to={item.to} className="connections__link">
                {item.text}
              </Link>
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
