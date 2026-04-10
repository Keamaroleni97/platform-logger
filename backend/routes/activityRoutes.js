const router = require("express").Router();
const Activity = require("../models/Activity");

// Add activity
router.post("/", async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.json(activity);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user activities
router.get("/:userId", async (req, res) => {
  try {
    const data = await Activity.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
