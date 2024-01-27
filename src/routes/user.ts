import express from "express";
import UserController from "../controllers/user";

const router = express.Router();

router.get("/user", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.get();
  return res.send(response);
});

router.get("/user/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getById(req.params.id);
  if (response) {
    return res.send(response);
  }
  return res.status(404).send();
});

export default router;
