<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Prakhar's Notes

1. Install the NestJS CLI - 
```
yarn global add @nestjs/cli
```
2. Create a new project with NestJS - 
```
nest new nestjs-task-management
```
3. Using NestJS generate method - 
```
nest g --help
```
4. Using NestJS g to create a new module - 
```
nest g module tasks
```
5. Create a controller without tests - 
```
nest g controller tasks --no-spec
```
6. Create a service without tests - 
```
nest g service tasks --no-spec
```
7. Add a new NPM package with yarn - 
```
yarn add uuid
```
8. To use pipes for validation in NestJS, we need to add 2 packages - 
```
yarn add class-validator class-transformer
```
9. class-validator 
```
https://github.com/typestack/class-validator
```
10. Start a new docker container for postgres called postgres-nest
```
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```
11. View running docker containers 
```
docker container ls
```
12. Stop a running container named postgres-nest
```
docker container stop postgres-nest
```
13. Start a container named postgres-nest
```
docker container start postgres-nest
```
14. Delete a container named postgres-nest
```
docker container rm postgres-nest
```
15. Install pgAdmin and then setup a new server with the details configured for the docker container above. 
16. Object Relational Mapping ORM - a technique that lets you query and manipulate data from a database, using an object-oriented paradigm.
17. TypeORM - an ORM library that can run in Node.js and used with Typescript. [typeorm.io](https://typeorm.io)
18. Add packages to use TypeORM - 
```
yarn add typeorm @nestjs/typeorm pg
```
19. Remove a package from yarn, like uuid - 
```
yarn remove uuid
```
20. Add [bcrypt](https://www.npmjs.com/package/bcrypt) - 
```
yarn add bcrypt
```
21. Setup for Auth using Passport.js and JWT - 
```
yarn add @nestjs/jwt @nestjs/passport passport passport-jwt
```
22. [JWT](https://jwt.io)
23. To add typescript types to passport, just to make intergration easier - 
```
yarn add @types/passport-jwt
```
24. Setup config module for environment values - 
```
yarn add @nestjs/config
```
25. Config scheme validations for Nest.js, need to start 2 packages to get started, [joi](https://github.com/hapijs/joi) - 

```
yarn add @hapi/joi

yarn add -D @types/hapi__joi // 2 underscores. dev dependency for types for joi
```

## Devops Notes

1. Add Heroku CLI to your machine - 
```
yarn global add heroku
```
or 
```
npm install -g heroku
```
2. Login on Heroku - 
```
heroku login
```
3. Create a new heroku app
4. Add a Postgres addon associated with this newly added app
5. Heroku deployment pipeline depends on git - to trigger a build. In order to do this, heroku needs us to add itself as an additional remote git. Use heroku CLI for this- 
```
heroku git:remote -a NAME_OF_APP
```
6. Fix this typescript buildtime/runtime envrionment fix - 
```
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=production
heroku config:set STAGE=prod
```
7. We can now set the DB env varibales using the same CLI way or the user interface way. Upto us.