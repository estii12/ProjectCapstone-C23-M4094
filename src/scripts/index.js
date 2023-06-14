import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.scss';
import '../styles/login.scss';
import '../styles/form.scss';
import '../styles/admin.scss';
import './component/app-bar';
import './component/sidebar-admin';
import './component/toolbar-admin';
import './component/footer-bar';
import App from './views/app';
import './views/pages/article';
import './views/pages/tentangKami';
import './views/pages/loginUser';
import './views/pages/regisUser';
import swRegister from './utils/sw-register';

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
