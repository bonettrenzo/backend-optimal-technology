import { Router } from "express";
import { getOneUser, getAllUsers, createUser, deleteUser, updateUser } from "../controllers/users.controller.js";

const router = Router();


router
    .get('/users/', getAllUsers)
    .get('/users/:id', getOneUser)
    .post('/users', createUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser)
export default router;