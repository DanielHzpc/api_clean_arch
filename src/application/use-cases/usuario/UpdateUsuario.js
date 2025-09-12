

export default class UpdateUsuario {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async execute(id, datosActualizados) {
        // Llama directamente al método 'update' del repositorio.
        const usuarioActualizado = await this.usuarioRepository.update(id, datosActualizados);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!usuarioActualizado) {
            console.warn(`No se encontró ninguna compra con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return usuarioActualizado;
    }
}