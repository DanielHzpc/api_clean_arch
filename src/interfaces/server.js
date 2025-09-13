import express from "express";
import compraRoutes from "../infrastucture/routes/compraRoutes.js";
import usuarioRoutes from "../infrastucture/routes/usuarioRoutes.js";
import clienteRoutes from "../infrastucture/routes/clienteRoutes.js";



const app = express();

app.use(express.json());

app.use('/', compraRoutes);
app.use('/', usuarioRoutes);
app.use('/', clienteRoutes);


export default app;

