import router from '../config/router.js';
import { getAllUsers , getUserById , createUser , updateUser , deleteUser, getAllUsersTable} from "../controllers/users.controller.js";

router.get('/usersdata', getAllUsersTable)

//User Routes (Protected)
router.get('/',  getAllUsers);
router.get('/:id',  getUserById);
router.post('/',  createUser);
router.put('/:id',  updateUser);
router.delete('/:id' , deleteUser);


export default router;