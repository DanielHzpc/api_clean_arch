export default class DeleteCliente {
   
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(id) {
        return await this.clienteRepository.delete(id);
    }
}