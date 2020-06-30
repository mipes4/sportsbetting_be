const { Router } = require("express");
const Prediction = require("../models").predictions;
const apiUrl = require("../config/constants").apiUrl;

const router = new Router();

console.log(apiUrl);
// Create prediction
router.post("/", async (req, res, next) => {
  const { predGoalsHomeTeam, predGoalsAwayTeam, userId, scoreId } = req.body;

  //   console.log(req.body);

  if (!predGoalsHomeTeam || !predGoalsAwayTeam || !userId || !scoreId) {
    return res.status(400).send("Please provide everything");
  }

  try {
    const newPrediction = await Prediction.create({
      predGoalsHomeTeam,
      predGoalsAwayTeam,
      userId,
      scoreId,
    });
    // console.log(newPrediction);

    res.status(201).json({ ...newPrediction.dataValues });
  } catch (error) {
    next(error);
  }
});

// router.patch("", async (req, res, next) => {
//   try {
//     const fixtureId = parseInt(req.param.fixtureId);
//     const predictionToUpdate = await Prediction.findOne({ where: fixtureId });
//     //Fetch match info from API await axios.get matchUrl/fixtureId
//     if (!predictionToUpdate) {
//       res.status(404).send("Prediction not found");
//     } else {
//       const updatedPrediction = await predictionToUpdate.update(req.body);
//       res.json(updatedPrediction);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
