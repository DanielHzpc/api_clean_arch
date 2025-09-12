import { Router } from "express";
import { createUsuario, getUsuarios, getUsuarioById, updateUsuario, deleteUsuario } from "../controllers/usuarioController.js";

const router = Router();

router.post("/usuario/", createUsuario);
router.get("/usuario/", getUsuarios);
router.get("/usuario/:id", getUsuarioById);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);



export default router;


