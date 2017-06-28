import People from '../views/People';
import Welcome from './../views/Welcome';
import Details from './../views/Details';

export default [
  {
    path: '/people',
    name: 'people',
    component: People,
    title: 'People',
    redirect: { name: 'people-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'people-welcome',
        component: Welcome,
      },
      {
        path: ':id',
        name: 'people-details',
        component: Details,
      },
    ],
  },
];
