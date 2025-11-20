import express from 'express';
const router = express.Router();
import { getAllUsers , getUserById , createUser , updateUser , deleteUser, getAllUsersTable} from "../controllers/users.controller.js";

router.get('/usersdata', getAllUsersTable)

//User Routes (Protected)
router.get('/',  getAllUsers);
router.get('/:id',  getUserById);
router.post('/',  createUser);
router.put('/:id',  updateUser);
router.delete('/:id' , deleteUser);


export default router;