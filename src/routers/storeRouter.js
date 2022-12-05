import * as controller from '../controllers/controllerStores'
import router from './userRouter';

router.get('/store', controller.getAllStores);

router.get('/store/:id',controller.getOneStore);

router.post('/store', controller.createStore);

router.put('/store/update/:id', controller.updateStoreData);

router.delete('/store/delete/:id', controller.deleteStore);

export default router;