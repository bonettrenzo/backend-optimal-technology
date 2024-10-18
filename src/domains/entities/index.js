import { Usuarios, UsuariosSchema } from './users.model.js'

function setupModel (sequelize){
    Usuarios.init(UsuariosSchema, Usuarios.config(sequelize))
}


export default setupModel;