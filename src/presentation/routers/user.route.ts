import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.get("/user", (req, res) => userController.readAll(req, res));
router.get("/user-one", (req, res) => userController.read(req, res));
router.post("/user", (req, res) => userController.create(req, res));
router.put("/user", (req, res) => userController.update(req, res));
router.delete("/user/:id", (req, res) => userController.delete(req, res));

export default router;
