import Task from "../models/task"

const get = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'project_id', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({tasks})
    } catch (e) {
        console.log(e)
    }
}

const create = async (req, res) => {
    const {name, done, project_id} = req.body
    try {
        let newTask = await Task.create({
            name,
            done,
            project_id
        }, {
            fields: ['name', 'done', 'project_id']
        })

        res.json({
            message: 'Task created successfully'
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

const del = async (req, res) => {
    try {
        const {id} = req.params
        await Task.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'Task deleted successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

const upd = async (req, res) => {
    const {id} = req.params
    const {name, done, project_id} = req.body

    try {

        const task = await Task.findOne({
            attributes: ['name', 'project_id', 'done', 'id'],
            where: {id}
        })

        const updatedTask = await task.update({
                name,
                done,
                project_id
            },
            {
                where: {id}
            })

        return res.json({
            message: 'Task updated successfully',
            data: updatedTask
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

const getOne = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findOne({
            attributes: ['id', 'project_id', 'name', 'done',],
            where: {id}
        })
        res.json({task})
    } catch (e) {
        console.log(e)
    }
}

const getByRelatives = async (req, res) => {
    try {
        const {project_id} = req.params
        const tasks = await Task.findAll({
            attributes: ['id', 'project_id', 'name', 'done',],
            where: {
                project_id
            }
        })
        res.json({tasks})
    } catch (e) {
        console.log(e)
    }
}

export {get, create, del, upd, getOne, getByRelatives}