import express from "express";
import {
  logout,
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
  remove,
  see,
  requestGithubLogin,
  callbackGithubLogin,
} from "../controllers/userController";
import {
  avartarUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avartarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.get("/github/request", publicOnlyMiddleware, requestGithubLogin);
userRouter.get("/github/callback", publicOnlyMiddleware, callbackGithubLogin);

userRouter.get("/:id", see);
// userRouter.get("/remove", remove);

export default userRouter;
