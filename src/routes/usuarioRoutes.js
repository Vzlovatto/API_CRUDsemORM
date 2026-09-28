import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.get("/", usuarioController.listar);
router.post("/", usuarioController.criar);
router.put("/:id", usuarioController.atualizar);
router.delete("/:id", usuarioController.deletar);

export default router;