import express from "express";
import {
  notificationSettings,
  emailSettings,
  securitySettings,
  privacySettings,
  applicationSettings,
} from "../controllers/settings.controller.js";

const router = express.Router();

router.get("/settings/notification", notificationSettings);
router.get("/settings/email", emailSettings);
router.get("/settings/security", securitySettings);
router.get("/settings/privacy", privacySettings);
router.get("/settings/application", applicationSettings);

export default router;
