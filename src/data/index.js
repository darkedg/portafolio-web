import header from '../assets/img/png/header.png';

const db = {
  nav: {
    logo: 'EMG',
    links: [
      { _id: 2, text: 'Inicio', to: '' },
      { _id: 3, text: 'Sobre Mí', to: 'about' },
      { _id: 4, text: 'Habilidades', to: 'skills' },
      { _id: 5, text: 'Projectos', to: 'project' },
      { _id: 6, text: 'Contacto', to: 'contact' },
    ]
  },
  header: {
    img: header,
    imgPlaceholder: 'header',
    text: ['¡Hola!', 'Mi nombre es Edgar', 'Soy'],
    btnText: 'Descubrir más',
  },
}

export default db;