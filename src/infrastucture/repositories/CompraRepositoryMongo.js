import mongoose from "mongoose";

const CompraSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    fecha: Date,
    items: [{
      producto: String,
      cantidad: Number,
      precio: Number
    }],
    domicilio: Boolean,
    direccion: {
      calle: String ,
      ciudad: String
    },
    total: Number
  });

const CompraModel = mongoose.model("Compra", CompraSchema);

class CompraRepositoryMongo {

  async create(compraData) {
    const compra = new CompraModel(compraData);
    return await compra.save();
  }

  async findAll(){
    return await CompraModel.find();
  }

  async findById(id){
    return await CompraModel.findById(id);
  }

  async update(id, compraData) {
      return await CompraModel.findByIdAndUpdate(id, compraData, { new: true });
  }

  async delete(id) {
    return await CompraModel.findByIdAndDelete(id);
  }
};

export default CompraRepositoryMongo;

