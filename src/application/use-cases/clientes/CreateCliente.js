export default class CreateCliente {
    constructor(clienteRepository) {
      this.clienteRepository = clienteRepository;
    }
  
    async execute(clienteData) {
      return await this.clienteRepository.create(clienteData);
    }
}
