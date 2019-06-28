import Vue from 'vue';
import VueRouter from 'vue-router';
import AddUser from '../components/AddUser'
import Users from "../components/Users";

const routes = [
    {
        path: '/',
        name: 'users',
        component: Users
    },
    {
        path: '/add',
        name: 'adduser',
        component: AddUser
    }
];

const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
});

Vue.use(VueRouter);

export default router;

//     export default new Router({
//     mode: 'history',
//     base: '/',
//     routes
// }),