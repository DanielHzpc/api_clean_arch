export default class GetClienteById {
    constructor(clienteRepository) {
      this.clienteRepository = clienteRepository;
    }
  
    async execute(id) {
      return await this.clienteRepository.findById(id);
    }
}

