import Messages from '../views/Messages';
import Welcome from './../views/Welcome';
import Details from './../views/Details';

export default [
  {
    path: '/messages',
    name: 'messages',
    component: Messages,
    title: 'Messages',
    icon: 'fa-comments',
    redirect: { name: 'messages-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'messages-welcome',
        component: Welcome,
      },
      {
        path: ':id',
        name: 'messages-details',
        component: Details,
      },
    ],
  },
];
