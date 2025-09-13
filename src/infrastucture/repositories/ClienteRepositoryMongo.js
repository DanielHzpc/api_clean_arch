import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    documento: Number,
    nombre: String,
    email: String,
    whatsapp: Number
  });

const ClienteModel = mongoose.model("Cliente", ClienteSchema);

class ClienteRepositoryMongo {

  async create(clienteData) {
    const cliente = new ClienteModel(clienteData);
    return await cliente.save();
  }

  async findAll(){
    return await ClienteModel.find();
  }

  async findById(id){
    return await ClienteModel.findById(id);
  }

  async update(id, clienteData) {
      return await ClienteModel.findByIdAndUpdate(id, clienteData, { new: true });
  }

  async delete(id) {
    return await ClienteModel.findByIdAndDelete(id);
  }
};

export default ClienteRepositoryMongo;

