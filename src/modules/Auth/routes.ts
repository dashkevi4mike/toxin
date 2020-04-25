import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  auth: {
    'sign-in': null,
    'sign-up': null,
    'reset-password': null,
    'set-new-password': null,
  },
});
