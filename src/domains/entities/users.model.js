import { Model, DataTypes } from "sequelize";

const USUARIOS_TABLE = 'usuarios';

export class Usuarios extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIOS_TABLE,
            modelName: 'Usuarios',
            timestamps: true
        }
    }
}


export const UsuariosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },

}

