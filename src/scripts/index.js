import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
// import main from './scripts/main';
// import "./component/main-navbar.js";
import App from './view/app';
import Daftar from './view/pages/daftar';
// import { }
const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
  });
  
// const form = document.getElementById('reg-form');
// form.addEventListener('submit', registerUser)
// function registerUser(event) {
//   event.preventDefault()
//   const email = document.getElementById('inputEmail')
//   const kataSandi = document.getElementById('inputPassword')
//   const konfirmasiKataSandi = document.getElementById('repeatPassword')
// }
