 import express from 'express';
import { UserRoute } from '../modules/user/user.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  // {
  //   path: '/auth',
  //   route: LoginRoutes,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
