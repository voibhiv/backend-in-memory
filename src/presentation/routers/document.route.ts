import { Router } from "express";
import { DocumentController } from "../controllers/document.controller";

const router = Router();
const documentController = new DocumentController();

// router.get("/user", (req, res) => userController.getAll(req, res));
router.post("/document", (req, res) => documentController.create(req, res));
// router.put("/user", (req, res) => userController.update(req, res));
// router.delete("/user/:id", (req, res) => userController.delete(req, res));

export default router;
