const { Router } = require("express");
const Match = require("../models").match;
const Prediction = require("../models").predictions;
const User = require("../models").user;
const Score = require("../models").score;

const router = new Router();

// GET all matches with predictions
router.get("/user/:userId", async (req, res, next) => {
  const { userId } = req.params;
  console.log("What are my params?", userId);
  try {
    const myMatches = await Match.findAll({
      include: {
        model: Prediction,
        where: { userId: userId },
        required: false,
        include: [{ model: Score }],
      },
    });
    res.send(myMatches);
  } catch (e) {
    next(e);
  }
});

// GET one match with all predictions with the particular user
router.get("/match/:matchId", async (req, res, next) => {
  const { matchId } = req.params;
  try {
    const myMatch = await Match.findByPk(matchId, {
      include: { model: Prediction, include: [{ model: User }] },
    });
    res.send(myMatch);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
