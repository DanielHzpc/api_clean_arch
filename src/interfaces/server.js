import express from "express";
import compraRoutes from "../infrastucture/routes/compraRoutes.js";


const app = express();

app.use(express.json());

app.use('/', compraRoutes);


export default app;

