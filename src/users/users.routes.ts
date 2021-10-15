import { Router } from 'express'
import * as userController from './users.controller'

const router = Router()

router.get('/',  userController.index)
router.get('/:id',  userController.show)
router.get('/newDto/:id',  userController.showNewDto)

// router.post('/', userController.store)
// router.put('/:id',  userController.update)
// router.delete('/:id', userController.destroy)

export default router
