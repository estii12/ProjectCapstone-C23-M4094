import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.scss';
import '../styles/login.scss';
import '../styles/form.scss';
import '../styles/admin.scss';
import '../styles/beranda.scss';
import './component/app-bar';
import './component/sidebar-admin';
import './component/toolbar-admin';
import './component/footer-bar';
import App from './views/app';
import './views/pages/article';
import './views/pages/tentangKami';
import './views/pages/loginUser';
import './views/pages/regisUser';
import './views/pages/detailArticle';
import swRegister from './utils/sw-register';
// import 'lazysizes';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#nav-bar'),
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
