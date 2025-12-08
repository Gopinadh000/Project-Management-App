import express from 'express';
import { getAllUsers , getUserById , createUser , updateUser , deleteUser, getAllUsersTable} from "../controllers/users.controller.js";

const router = express.Router();

//User Routes (Protected)
router.get('/',  getAllUsers);
router.get('/:id',  getUserById);
router.post('/',  createUser);
router.put('/:id',  updateUser);
router.delete('/:id' , deleteUser);
router.get('/:srchtab=allusers', getAllUsersTable)


export default router;