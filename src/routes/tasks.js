import {Router} from 'express'

const router = Router()
import {get, create, del, upd, getOne, getByRelatives} from "../controllers/task.controller"

router.post('/', create)
router.get('/', get)

router.get('/:id', getOne)
router.delete('/:id', del)
router.put('/:id', upd)

router.get('/project/:project_id', getByRelatives)

export default router