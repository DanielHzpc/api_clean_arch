export default class UpdateCompra {
    constructor(compraRepository) {
        this.compraRepository = compraRepository;
    }

    async execute(id, datosActualizados) {
        // Llama directamente al método 'update' del repositorio.
        const compraActualizada = await this.compraRepository.update(id, datosActualizados);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!compraActualizada) {
            console.warn(`No se encontró ninguna compra con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return compraActualizada;
    }
}