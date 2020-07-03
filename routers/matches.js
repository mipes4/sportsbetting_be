const { Router } = require("express");
const Match = require("../models").match;
const Prediction = require("../models").predictions;
const User = require("../models").user;

const router = new Router();

// GET all matches with predictions
router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  console.log("What are my params?", userId);
  try {
    const myMatches = await Match.findAll({
      include: { model: Prediction, where: { userId: userId } },
    });
    res.send(myMatches);
  } catch (e) {
    next(e);
  }
});

// GET one match with all predictions with the perticular user
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
