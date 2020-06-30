const { Router } = require("express");
const Prediction = require("../models").predictions;

const router = new Router();

//Add prediction values
router.patch("/:fixtureId", async (req, res, next) => {
  try {
    const fixtureId = parseInt(req.params.fixtureId);
    const predictionToUpdate = await Prediction.findOne(fixtureId);
    if (!predictionToUpdate) {
      res.status(404).send("Match not found");
    } else {
      const updatedPrediction = await predictionToUpdate.update(req.body);
      res.json(updatedPrediction);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
