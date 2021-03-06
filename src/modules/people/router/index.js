import People from '../views/People';
import Welcome from './../views/Welcome';
import Details from './../views/Details';
import Create from './../views/Create';
import Edit from './../views/Edit';

export default [
  {
    path: '/people',
    name: 'people',
    component: People,
    title: 'People',
    icon: 'fa-users',
    redirect: { name: 'people-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'people-welcome',
        component: Welcome,
      },
      {
        path: 'create',
        name: 'people-create',
        component: Create,
      },
      {
        path: ':id',
        name: 'people-details',
        component: Details,
      },
      {
        path: ':id/edit',
        name: 'people-edit',
        component: Edit,
      },
    ],
  },
];
