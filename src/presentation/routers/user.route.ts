import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.get("/user", (req, res) => userController.getAll(req, res));
router.post("/user", (req, res) => userController.create(req, res));
router.put("/user", (req, res) => userController.update(req, res));
router.delete("/user/:id", (req, res) => userController.delete(req, res));

export default router;
