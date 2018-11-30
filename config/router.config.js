export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // formDemo
      {
        path: '/FormDemo',
        name: 'Form Demo',
        icon: 'dashboard',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/FormDemo/FormDemo1',
            name: 'Form Demo1',
            component: './FormDemo1/FormDemo1',
          },
        ],
      },
      
      {
        component: '404',
      },
    ],
  },
];
