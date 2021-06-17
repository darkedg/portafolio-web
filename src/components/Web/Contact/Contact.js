
import { MailOutlined, SendOutlined } from '@ant-design/icons';

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
            <div className="icons-ind">
              <a href="mailto:edgel.infor123@gmail.com"  title="edgel.infor123@gmail.com">
                <MailOutlined />
              </a>
              <p>Correo electrónico: <br /><span>edgel.infor123@gmail.com</span></p>
            </div>
            <div className="icons-ind">
              <a href="https://t.me/edgelmg" target="_blank" rel="noreferrer" title="Edgar">
                <SendOutlined />
              </a>
              <p>Telegram <br /><span>@edgelmg</span></p>
            </div>
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
