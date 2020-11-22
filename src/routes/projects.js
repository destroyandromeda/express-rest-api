import {Router} from 'express'
import {get, create, getOne, del, upd} from "../controllers/project.controller"

const router = Router()

router.get('/', get)
router.get('/:id', getOne)
router.post('/', create)
router.delete('/:id', del)
router.put('/:id', upd)

export default router