import Router from 'vue-router';
import Dashboard from '@/views/Dashboard';
import messagesRoutes from '@/modules/messages/router';
import peopleRoutes from '@/modules/people/router';

const baseRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '*',
    redirect: { name: 'dashboard' },
  },
];

const routes = baseRoutes.concat(messagesRoutes, peopleRoutes);
export default new Router({
  routes,
});
