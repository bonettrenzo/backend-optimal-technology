import UsuariosRepository from '../repositories/users.repository.js';

class UsuariosServices {

    constructor() {
        this.usuariosRepository = new UsuariosRepository();
    }

    async find() {
        try { 
            const res = await this.usuariosRepository.findAll();
            return res;
        } catch (error) {
            throw new Error('Error al obtener UsuariosRepository: ' + error.message);
        }
    }

    async findOne(id) {
        
        try {
            const res = await this.usuariosRepository.findById(id);
            if(!res){
                throw new Error('Usuario no encontrado');
            }
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async create(data) {

        try {
            const res = await this.usuariosRepository.create(data);
            return res;    
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async update(id, nombre, correo, telefono) {


        try {
            const user = await this.findOne(id);
            if (user) {
                const res = await user.update({nombre, correo, telefono});
                return res;
            }
            throw new Error('Usuario no encontrado');
        } catch (error) {
            throw new Error('Error al actualizar usuario: ' + error.message);
        }

    }

    async delete(id) {

        try {
            const user = await this.findOne(id);
            if (user) {
                const res = await user.destroy();
                return res;
            }
            throw new Error('usuario no encontrado');
        } catch (error) {
            throw new Error('Error al eliminar usuario: ' + error.message);
        }
    }
}

export default UsuariosServices;
