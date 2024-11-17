import { Router } from "express";
import {
  registerLogin,
  loginLogin,
  logoutLogin,
  refreshAccessToken,
} from "../controllers/login.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerLogin);

router.route("/login").post(loginLogin);

//secured routes
router.route("/logout").post(verifyJWT, logoutLogin);
router.route("/refresh-token").post(refreshAccessToken);
export default router;
