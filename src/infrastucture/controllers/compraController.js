import CreateCompra from "../../application/use-cases/compras/CreateCompra.js";
import GetCompraById from "../../application/use-cases/compras/GetCompraById.js";
import GetCompras from "../../application/use-cases/compras/GetCompras.js";
import UpdateCompra from "../../application/use-cases/compras/UpdateCompra.js";
import DeleteCompra from "../../application/use-cases/compras/DeleteCompra.js";


import CompraRepositoryMongo from "../repositories/CompraRepositoryMongo.js";

const compraRepository = new CompraRepositoryMongo();
export const createCompra = async (req, res) => {
  try {
    const createCompra = new CreateCompra(compraRepository);
    const compra = await createCompra.execute(req.body);
    res.status(201).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getCompras = async (req, res) => {
  try {
    const getCompras = new GetCompras(compraRepository);
    const compras = await getCompras.execute();
    res.status(200).json(compras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompraById = async (req, res) => {
  try {
    const getCompraById = new GetCompraById(compraRepository);
    const compra = await getCompraById.execute(req.params.id);
    res.status(200).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateCompra = async (req, res) => {
    try {
        const updateCompra = new UpdateCompra(compraRepository);
        const compraActualizada = await updateCompra.execute(req.params.id, req.body);

        if (!compraActualizada) {
            // Si el resultado es null, significa que el ID no se encontró
            return res.status(404).json({ error: "Compra no encontrada" });
        }

        // Si se actualizó correctamente, respondemos con el objeto actualizado
        res.status(200).json(compraActualizada);
    } catch (err) {
        // Si da error, mensaje 500
        res.status(500).json({ error: err.message });
    }
};


export const deleteCompra = async (req, res) => {
    try {


        const deleteCompra = new DeleteCompra(compraRepository);
        const eliminado = await deleteCompra.execute(req.params.id);

        if (!eliminado) {
            // Si la compra no se encontró, responde con 404
            return res.status(404).json({ message: "Compra no encontrada o ya eliminada" });
        }
        
        // Si la eliminación fue exitosa, responde con 204 No Content
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


