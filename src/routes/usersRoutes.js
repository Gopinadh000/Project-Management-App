import express from 'express';
import { getAllUsers , getUserById , createUser , updateUser , deleteUser, getAllUsersTable} from "../controllers/users.controller.js";

import  { jwtTokenAuthorization , cookieTokenAuthorization } from  "../services/jwt/jwt.service.js";

const router = express.Router();


//Route : /users

//simple jwt token verification adding here

//User Routes (Protected)
router.get('/', cookieTokenAuthorization,   getAllUsers);
router.get('/:id', jwtTokenAuthorization,   getUserById);
router.post("/", createUser);
router.put('/:id', jwtTokenAuthorization,   updateUser);
router.delete('/:id' , jwtTokenAuthorization,   deleteUser);
router.get('/:srchtab=allusers', jwtTokenAuthorization, getAllUsersTable)


export default router;