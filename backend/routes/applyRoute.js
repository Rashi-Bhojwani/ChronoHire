import express from "express";

import upload from "../middleware/upload.js";

import {
  submitApplication,
} from "../controllers/applyController.js";

const router = express.Router();

router.post(
  "/apply",
  upload.single("resume"),
  submitApplication
);

export default router;