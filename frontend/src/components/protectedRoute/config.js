import {
    LOG_IN,
    Dashboard,
    SERVICES,
} from './../../constants/routes';

const Routes=  [
  {
    path: Dashboard,
    exact: true,
    component: () => require("./../../pages/dashboard").default
  },
  {
    path: LOG_IN,
    
    exact: true,
    component: () => require("./../../pages/login").default
  },
  {
    path: SERVICES,
   
    exact: true,
    component: () => require("./../../pages/services").default
  }
];

export default Routes;