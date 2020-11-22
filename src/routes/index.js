import express from 'express'
let router = express.Router()
import projects from "./projects"
import tasks from "./tasks"

router.use('/projects', projects)
router.use('/tasks', tasks)

export default router