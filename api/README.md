# Back-end Assesment
In this project you will a NodeJS-Express backend demo. This document contains how to build and start the server and some useful notes. It models Users and Transactions.

## Build and Start
In order to start the server, `NodeJS` and `Docker` must be installed. `Docker` is used to host a MariaDB instance. After installing this, you must run the following npm scripts located in the `package.json` in the root of the project. You can use `yarn` or `npm`.
- `yarn` or `npm install` installs the project's node modules dependencies.
- `db:start` runs the `docker-compose` script to fire up the database.
- `db:populate` will populate the database with random data using `faker.js` library.
- `yarn start` will start the server on port 8080. 

## Useful Notes and Considerations
- Since I have an ARM MacBook, I had to use a MariaDB docker image, because no ARM64 MySQL image existed at that moment.
- I used `TypeORM` for interfacing with the DB, it is a clean, typed and robust alternative.
- `Faker.JS` is used via `typeorm-fixtures-cli`, this allows to populate the database with random but coherent information.
- Both fron and back end are on the same repository. This can be improved by the use of **git submodules** or by creating a mono-repo with **lerna**. 
- In a real-life scenario, a logged-in user should consume /me or similar endpoints instead of passing it's ID via path parameters. The back-end should identify the user decoding the token used for authentication.
- You can find a `swagger.yaml` file in the root of the project for documentation.