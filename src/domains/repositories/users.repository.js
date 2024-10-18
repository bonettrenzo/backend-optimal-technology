import { Usuarios } from '../entities/users.model.js';

class UsuariosRepository {
    constructor() {}
    
    async findAll() {
        return await Usuarios.findAll();
    }

    async findById(id) {
        return await Usuarios.findByPk(id);
    }

    async create(data) {
        return await Usuarios.create(data);
    }

    async update(id, data) {
        const user = await this.findById(id);
        if (user) {
            return await user.update(data);
        }
        throw new Error('Usuario no encontrado');
    }

    async delete(id) {
        const user = await this.findById(id);
        if (user) {
            return await user.destroy();
        }
        throw new Error('Usuario no encontrado');
    }
}

export default UsuariosRepository;
