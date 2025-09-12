import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: Boolean
  });

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);

class UsuarioRepositoryMongo {

  async create(usuarioData) {
    const usuario = new UsuarioModel(usuarioData);
    return await usuario.save();
  }

  async findAll(){
    return await UsuarioModel.find();
  }

  async findById(id){
    return await UsuarioModel.findById(id);
  }

  async update(id, usuarioData) {
      return await UsuarioModel.findByIdAndUpdate(id, usuarioData, { new: true });
  }

  async delete(id) {
    return await UsuarioModel.findByIdAndDelete(id);
  }
};

export default UsuarioRepositoryMongo;

