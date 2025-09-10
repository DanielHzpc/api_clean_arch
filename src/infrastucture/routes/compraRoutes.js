import { Router } from "express";
import { createCompra, getCompras, getCompraById, updateCompra, deleteCompra } from "../controllers/compraController.js";

const router = Router();

router.post("/compras/", createCompra);
router.get("/compras/", getCompras);
router.get("/compras/:id", getCompraById);
router.put("/compras/:id", updateCompra);
router.delete("/compras/:id", deleteCompra);



export default router;


