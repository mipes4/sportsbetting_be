require("dotenv").config();
const { Router } = require("express");
const Axios = require("axios");
const apiUrl = require("./config/constants").apiUrl;
const apiUrlDemo = require("./config/constants").apiUrlDemo;
const apiKey = require("./config/constants").apiKey;
const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const predictionRouter = require("./routers/predictions");
const Match = require("./models").match;
const Prediction = require("./models").predictions;
const matches = require("./API_requests/matches");

const app = express();
const router = new Router();

matches.getMatches();

/**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * a.k.a. body-parser
 * Needed to be able to POST / PUT / PATCH
 *
 * docs: https://expressjs.com/en/api.html#express.json
 *
 */

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 *
 * cors middleware:
 *
 * Since our api is hosted on a different domain than our client
 * we are are doing "Cross Origin Resource Sharing" (cors)
 * Cross origin resource sharing is disabled by express by default
 * for safety reasons (should everybody be able to use your api, I don't think so!)
 *
 * We are configuring cors to accept all incoming requests
 * If you want to limit this, you can look into "white listing" only certain domains
 *
 * docs: https://expressjs.com/en/resources/middleware/cors.html
 *
 */

app.use(corsMiddleWare());

/**
 *
 * delay middleware
 *
 * Since our api and client run on the same machine in development mode
 * the request come in within milliseconds
 * To simulate normal network traffic this simple middleware delays
 * the incoming requests by 1500 second
 * This allows you to practice with showing loading spinners in the client
 *
 * - it's only used when you use npm run dev to start your app
 * - the delay time can be configured in the package.json
 */

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

/**
 *
 * When going into live mode, change apiUrlDemo into apiUrl and uncomment headers
 *
 */

app.get("/matches", async (req, res, next) => {
  const myMatches = await Match.findAll({ include: Prediction });
  res.send(myMatches);
});

app.use(corsMiddleWare());

app.use("/predictions", predictionRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = router;
