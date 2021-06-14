
import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="title container">
        <h1>Contacto</h1>
        <div className="barra"></div>
      </div>
      <div className="contact-container__todo container">
        <div className="contact-container__todo-info ">
          <div className="icons">
            <a href="mailto:edgel.infor123@gmail.com" className="icons-ind" title="edgel.infor123@gmail.com">
              <MailOutlined />
              <p>Correo electrónico: <br /><span>edgel.infor123@gmail.com</span></p>
            </a>
            <a href="tel:+59172570390" className="icons-ind" title="+591-72570390">
              <PhoneOutlined />
              <p>Teléfono <br /><span>591-72570390</span></p>
            </a>
            <a href="https://wa.link/xxdkp8" target="_blank" rel="noreferrer" className="icons-ind" title="Escribeme para ayudarte">
              <WhatsAppOutlined />
              <p>Whatsapp <br /><span>+59172570390</span></p>
            </a>
          </div>

        </div>
        <div className="contact-container__todo-form ">
          <h2>Contáctame</h2>
          <p>Si desea realizar una consulta, no dude en ponerse en contacto y le responderé lo antes posible.</p>
          <p>"Si no cometes errores, es que realmente no estás intentando nada". (Coleman Hawkins)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
