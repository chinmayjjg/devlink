const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.get("/user/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      name: user.name,
      username: user.username,
      resumeUrl: user.resume
        ? `${req.protocol}://${req.get("host")}/uploads/${user.resume}`
        : null,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});

module.exports = router;
