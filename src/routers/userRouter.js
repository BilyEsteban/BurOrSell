import { Router } from "express";
const router = Router();
import * as controller from '../controllers/userController'


router.get('/user', controller.getAllUsers);

router.get('/user/:id', controller.getOneUser);

router.post('/user/registration', controller.createUser);

router.put('/user/update/:id', controller.updateUser)

router.delete('/user/delete/:id', controller.deleteUser)


export default router;