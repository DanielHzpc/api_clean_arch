export default class DeleteCompra {
   
    constructor(compraRepository) {
        this.compraRepository = compraRepository;
    }

    async execute(id) {
        return await this.compraRepository.delete(id);
    }
}