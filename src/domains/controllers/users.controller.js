import UsuariosServices from "../services/users.service.js";


const service = new UsuariosServices();

export const createUser = async (req, res) => {
    try {
        const response = await service.create(req.body)

        res.status(200).json({ success: true, data: response })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const response = await service.find()
        res.status(200).json({ success: true, data: response })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getOneUser = async (req, res) => {
    try {
        const { id } = req.params

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'El Id debe ser un número entero' });
        }

        const response = await service.findOne(id)
        res.json({ success: true, data: response })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, correo, telefono } = req.body

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'El Id debe ser un número entero' });
        }

        const response = await service.update(id, nombre, correo, telefono)
        res.json({ success: true, data: response })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'El id debe ser un número entero' });
        }

        await service.delete(id)
        res.status(200).json({ success: true, data: "Registro eliminado exitosamente" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}