import CreateCliente from "../../application/use-cases/clientes/CreateCliente.js";
import GetClienteById from "../../application/use-cases/clientes/GetClienteById.js";
import GetClientes from "../../application/use-cases/clientes/GetClientes.js";
import UpdateCliente from "../../application/use-cases/clientes/UpdateCliente.js";
import DeleteCliente from "../../application/use-cases/clientes/DeleteCliente.js";


import ClienteRepositoryMongo from "../repositories/ClienteRepositoryMongo.js";

const clienteRepository = new ClienteRepositoryMongo();
export const createCliente = async (req, res) => {
  try {
    const createCliente = new CreateCliente(clienteRepository);
    const cliente = await createCliente.execute(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getClientes = async (req, res) => {
  try {
    const getClientes = new GetClientes(clienteRepository);
    const cliente = await getClientes.execute();
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const getClienteById = new GetClienteById(clienteRepository);
    const cliente = await getClienteById.execute(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateCliente = async (req, res) => {
    try {
        const updateCliente = new UpdateCliente(clienteRepository);
        const clienteActualizado = await updateCliente.execute(req.params.id, req.body);

        if (!clienteActualizado) {
            // Si el resultado es null, significa que el ID no se encontró
            return res.status(404).json({ error: "Compra no encontrada" });
        }

        // Si se actualizó correctamente, respondemos con el objeto actualizado
        res.status(200).json(clienteActualizado);
    } catch (err) {
        // Si da error, mensaje 500
        res.status(500).json({ error: err.message });
    }
};


export const deleteCliente = async (req, res) => {
    try {
        const deleteCliente = new DeleteCliente(clienteRepository);
        const eliminado = await deleteCliente.execute(req.params.id);

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


