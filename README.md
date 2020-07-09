# Sports betting app :soccer:

This is the server repository for my portfolio project Sports betting app. For more details, please refer to the README of the [client repository](https://github.com/mipes4/sportsbetting_fe).

## SETUP :electric_plug:

In config/constants and config/config there are listed a few process.env variables. Please replace the values with your own keys in a .env file:

- DATABASE_DEV=[Your postgres database (example)](https://www.elephantsql.com/)
- API_URL_DEMO=[The demo URL from https://www.api-football.com/](https://www.api-football.com/)
- API_URL=[The API URL from https://www.api-football.com/](https://www.api-football.com/)
- API_KEY=[The API Key from https://www.api-football.com/](https://www.api-football.com/)

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.
Open http://localhost:4000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run migrate`

Migrates the Postgres database using Sequelize-Cli.

#### `npm run seed`

The repository has some seeding files to set up a development envirement. This will seed the Postgres database.

**IMPORTANT**
_After_ migrating and _before_ seeding it's important that index.js file has run one time. Just make a little edit and save it and it runs.
