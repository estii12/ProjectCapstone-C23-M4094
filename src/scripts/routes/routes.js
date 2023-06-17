import Home from '../views/pages/home';
import Article from '../views/pages/article';
import TentangKami from '../views/pages/tentangKami';
import LoginUser from '../views/pages/loginUser';
import RegisUser from '../views/pages/regisUser';
import AdminDashboard from '../views/pages/adminDashboard';
import adminTable from '../views/pages/adminTable';
import userForm from '../views/pages/userForm';

const routes = {
    '/': Home,
    '/home': Home,
    '/article': Article,
    '/tentang-kami': TentangKami,
    '/login-user': LoginUser,
    '/regis-user': RegisUser,
    '/admin-dash': AdminDashboard,
    '/admin-table': adminTable,
    '/user-form': userForm,
    

};

export default routes;