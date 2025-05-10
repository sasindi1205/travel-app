const express = require("express");
const { protect, roleMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Admin-only route
router.get(
  "/dashboard",
  protect, // Authenticate the user
  roleMiddleware("admin"), // Check if user is an admin
  (req, res) => {
    res.status(200).json({ message: "Welcome to the admin dashboard" });
  }
);

module.exports = router;
