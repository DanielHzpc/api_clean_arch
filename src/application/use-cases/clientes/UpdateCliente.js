export default class UpdateCliente {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(id, datosActualizados) {
        // Llama directamente al método 'update' del repositorio.
        const clienteActualizado = await this.clienteRepository.update(id, datosActualizados);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!clienteActualizado) {
            console.warn(`No se encontró ninguna compra con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return clienteActualizado;
    }
}