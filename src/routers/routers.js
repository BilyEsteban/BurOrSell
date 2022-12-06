import { Router } from "express";
const router = Router();

import store from './storeRouter'
import user from './userRouter'


router.use(user);
router.use(store);


export default router;