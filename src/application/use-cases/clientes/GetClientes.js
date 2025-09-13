export default class GetClientes {
    constructor(clienteRepository) {
      this.clienteRepository = clienteRepository;
    }
  
    async execute() {
      return await this.clienteRepository.findAll();
    }
}

