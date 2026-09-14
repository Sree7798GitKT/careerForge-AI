const express = require("express");

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* =========================
   PUBLIC AUTH ROUTES
========================= */

router.post("/register", registerUser);

router.post("/login", loginUser);

/* =========================
   PROTECTED AUTH ROUTES
========================= */

router.get("/me", protect, getCurrentUser);

module.exports = router;