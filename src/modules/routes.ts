import { routes as guideRoutes } from './Guide/routes';
import { routes as mainRoutes } from './Main/routes';

export const routes = {
  ...guideRoutes,
  ...mainRoutes
};
