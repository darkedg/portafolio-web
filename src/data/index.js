import logo from '../assets/img/png/logo-cuadrado2.png';
import header from '../assets/img/png/header.png';
import cv from '../assets/documents/cv.png';
import img0 from '../assets/img/png/img1.png';
import img1 from '../assets/img/png/img2.png';
import img2 from '../assets/img/png/img3.png';
import html5 from '../assets/img/svg/html5.svg';
import css3 from '../assets/img/svg/css3.svg';
import bootstrap from '../assets/img/svg/bootstrap.svg';
import sass from '../assets/img/svg/sass.svg';
import javascript from '../assets/img/svg/javascript.svg';
import typescript from '../assets/img/svg/typescript.svg';
import react from '../assets/img/svg/reactjs.svg';
import angular from '../assets/img/svg/angular.svg';
import vue from '../assets/img/svg/vuejs.svg';
import php from '../assets/img/svg/php.svg';
import java from '../assets/img/svg/java.svg';
import nodejs from '../assets/img/svg/nodejs.svg';
import firebase from '../assets/img/svg/firebase.svg';
import laravel from '../assets/img/svg/laravel.svg';
import mysql from '../assets/img/svg/mysql.svg';
import sqlite from '../assets/img/svg/sqlite.svg';
import mongodb from '../assets/img/svg/mongodb.svg';
import postgresql from '../assets/img/svg/postgresql.svg';
import git from '../assets/img/svg/git.svg';
import github from '../assets/img/svg/github.svg';
import gitlab from '../assets/img/svg/gitlab.svg';
import adobephotoshop from '../assets/img/svg/adobephotoshop.svg';
import adobexd from '../assets/img/svg/adobexd.svg';
import adobeillustrator from '../assets/img/svg/adobeillustrator.svg';

const db = {
  nav: {
    logo: logo,
    links: [
      { _id: 2, text: 'Inicio', to: '/#header' },
      { _id: 3, text: 'Sobre Mí', to: '/#about' },
      { _id: 4, text: 'Habilidades', to: '/#skills' },
      { _id: 5, text: 'Projectos', to: '/projects' },
      { _id: 6, text: 'Contacto', to: '/#contact' },
    ]
  },
  header: {
    img: header,
    imgPlaceholder: 'header',
    text: ['¡Hola!', 'Mi nombre es Edgar', 'Soy'],
    btnText: 'Descubrir más',
  },
  about: {
    title: 'Sobre Mí',
    desc: [
      { text: 'Hola. ¿Qué tal?' },
      { text: 'Mi nombre es Edgar, soy egresado en Informática de la Universidad Mayor de San Andres y actualmente me dedico a tiempo completo como Desarrollador Front End Jr. de forma remota.' },
      { text: 'Soy una persona autodidacta, proactivo, organizado, que constantemente me dedico a aprender nuevas tecnologías y herramientas para asumir responsabilidades en diferentes areas laborales adquiriendo nuevos conocimientos.' },
      { text: 'Tambien tengo conocimiento necesarios en Back End.' }
    ],
    btnText: 'Ver currículum',
    cv: cv
  },
  skills: {
    title: 'Habilidades',
    skill: [
      {
        _id: '1',
        text: 'Frontend',
        tecnol: [
          { name: 'HTML 5', logo: html5 },
          { name: 'CSS 3', logo: css3 },
          { name: 'Bootstrap', logo: bootstrap },
          { name: 'Sass', logo: sass },
          { name: 'JavaScript', logo: javascript },
          { name: 'TypeScript', logo: typescript },
          { name: 'React', logo: react },
          { name: 'Angular', logo: angular },
          { name: 'Vue', logo: vue }
        ],
      },
      {
        _id: '2',
        text: 'Backend',
        tecnol: [
          { name: 'PHP', logo: php },
          { name: 'Java', logo: java },
          { name: 'Node.js', logo: nodejs },
          { name: 'Firebase', logo: firebase },
          { name: 'Laravel', logo: laravel },
        ],
      },
      {
        _id: '3',
        text: 'Database',
        tecnol: [
          { name: 'MySQL', logo: mysql },
          { name: 'SQLite', logo: sqlite },
          { name: 'MongoDB', logo: mongodb },
          { name: 'PostgreSQL', logo: postgresql }
        ],
      },
      {
        _id: '4',
        text: 'Otros',
        tecnol: [
          { name: 'Git', logo: git },
          { name: 'GitHub', logo: github },
          { name: 'GitLab', logo: gitlab },
          { name: 'Adobe Photoshop', logo: adobephotoshop },
          { name: 'Adobe XD', logo: adobexd },
          { name: 'Adobe Illustrator', logo: adobeillustrator },
        ],
      },
    ]
  },
  projects: [
    {
      _id: '0',
      name: 'Portafolio - Jaume',
      desc: 'Este Projecto de Jaume es un portafolio realizado con HTML5, CSS3, Responsive, flexive',
      img: img0,
      prog: [
        {des: 'HTML5'},
        {des: 'CSS3'},
        {des: 'FlexBox'}
      ],
      links: {
        github: 'https://github.com/darkedg/portfolio-jaume',
        demo: 'https://darkedg.github.io/portfolio-jaume/',
      }
    },
    {
      _id: '1',
      name: 'Shopping Cart',
      desc: "Este Projecto es una tienda de productos donde se podra añadir al carrito de compras, esta realizado con React y Sass",
      img: img1,
      prog: [
        {des: 'React'},
        {des: 'Sass'}
      ],
      links: {
        github: 'https://github.com/darkedg/shopping-cart-react',
        demo: 'https://darkedg.github.io/shopping-cart-react/',
      }
    },
    {
      _id: '2',
      name: 'Portafolio - Edgar',
      desc: "Este Projecto esta realizado con React, Sass y Responsive",
      img: img2,
      prog: [
        {des: 'React'},
        {des: 'Sass'},
        {des: 'Responsive'}
      ],
      links: {
        github: 'https://github.com/darkedg',
        demo: 'https://darkedg.github.io/portfolio-jaume/',
      }
    }
  ]
}

export default db;