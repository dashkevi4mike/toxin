import { routes as guideRoutes } from './Guide/routes';
import { routes as mainRoutes } from './Main/routes';
import { routes as authRoutes } from './Auth/routes';

export const routes = {
  ...guideRoutes,
  ...mainRoutes,
  ...authRoutes
};
