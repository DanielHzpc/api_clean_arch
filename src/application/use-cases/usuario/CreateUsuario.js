export default class CreateUsuario {
    constructor(usuarioRepository) {
      this.usuarioRepository = usuarioRepository;
    }
  
    async execute(usuarioData) {
      return await this.usuarioRepository.create(usuarioData);
    }
}