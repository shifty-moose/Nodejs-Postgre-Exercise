import { Router } from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../Controllers/usersController.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/:id', getUserById);
userRoutes.post('/:id', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes; 