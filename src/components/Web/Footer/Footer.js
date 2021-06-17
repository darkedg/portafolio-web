
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__copy">
        <p>Copyright © {new Date().getFullYear()} | Desarrollado por Edgar MG</p>
      </div>
    </div>
  );
};

export default Footer;
