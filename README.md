# Toxin
Demo project for booking rooms with using React+Redux+Typescript.

## NPM scripts
### To start locally
- ```npm run dev``` for development environment in watch mode
- ```npm run prod``` for production environment in watch mode

### To build locally (see build folder)
- ```npm run build:dev``` for development environment without watch mode
- ```npm run build:prod``` for production environment without watch mode

## Features
- [x] Typescript 2.x
- [x] React 16.x
- [x] React-router 4.x
- [x] Redux
- [x] Redux-saga for side-effects
- [x] SCSS
- [x] BEM methodology
- [x] Webpack 4.x
- [x] Tests (Jest, sinon, enzyme)
- [x] Test coverage
- [x] Hot reload

## Tests

Tests uses Jest framework [Jest](http://facebook.github.io/jest/)

* `npm test` или `npm t` - to run tests only at once
* `npm run test:watch` - to run test with watching mode
* `npm run test:debug` - to run test with debugging
(
  [Chrome](http://facebook.github.io/jest/docs/en/troubleshooting.html#content) /
  [VSCode](http://facebook.github.io/jest/docs/en/troubleshooting.html#debugging-in-vs-code) /
  [Webstorm](http://facebook.github.io/jest/docs/en/troubleshooting.html#debugging-in-webstorm)
).

## Instructions for local running on Mac OS
for local running you need setup nginx.

* Add `127.0.0.1	local.toxin.com` in your /etc/hosts
* Add local.toxin.com.conf in /usr/local/etc/nginx/servers/ with this content:
```
  server {
    listen 80;
    server_name local.toxin.com;

    location /api/ {
      proxy_pass http://localhost:8000/api/;
    }

    location / {
      proxy_pass http://localhost:3000/;
    }
  }
```
* Restart nginx with `brew services restart nginx`
* Frontend will available in http://local.toxin.com/ locally. Dont forget to start locally backend or change api url in package.json and in nginx config
