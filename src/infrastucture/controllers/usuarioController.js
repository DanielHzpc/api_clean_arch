import CreateUsuario from "../../application/use-cases/usuario/CreateUsuario.js";
import GetUsuarioById from "../../application/use-cases/usuario/GetUsuarioById.js";
import GetUsuarios from "../../application/use-cases/usuario/GetUsuarios.js";
import UpdateUsuario from "../../application/use-cases/usuario/UpdateUsuario.js";
import DeleteUsuario from "../../application/use-cases/usuario/DeleteUsuario.js";


import UsuarioRepositoryMongo from "../repositories/UsuarioRepositoryMongo.js";

const usuarioRepository = new UsuarioRepositoryMongo();
export const createUsuario = async (req, res) => {
  try {
    const createUsuario = new CreateUsuario(usuarioRepository);
    const usuario = await createUsuario.execute(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getUsuarios = async (req, res) => {
  try {
    const getUsuarios = new GetUsuarios(usuarioRepository);
    const usuario = await getUsuarios.execute();
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const getUsuarioById = new GetUsuarioById(usuarioRepository);
    const usuario = await getUsuarioById.execute(req.params.id);
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateUsuario = async (req, res) => {
    try {
        const updateUsuario = new UpdateUsuario(usuarioRepository);
        const usuarioActualizada = await updateUsuario.execute(req.params.id, req.body);

        if (!usuarioActualizada) {
            // Si el resultado es null, significa que el ID no se encontró
            return res.status(404).json({ error: "Compra no encontrada" });
        }

        // Si se actualizó correctamente, respondemos con el objeto actualizado
        res.status(200).json(usuarioActualizada);
    } catch (err) {
        // Si da error, mensaje 500
        res.status(500).json({ error: err.message });
    }
};


export const deleteUsuario = async (req, res) => {
    try {
        const deleteUsuario = new DeleteUsuario(usuarioRepository);
        const eliminado = await deleteUsuario.execute(req.params.id);

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


