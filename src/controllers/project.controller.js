import Project from "../models/Project"

const get = async (req, res) => {

    try {
        const projects = await Project.findAll()
        console.log(projects)
        res.json({
            data: projects
        })
    } catch (e) {
        console.log(e)
    }
}

const create = async (req, res) => {
    const {name, priority, description, deliverydate} = req.body
    if(!name && !priority && !deliverydate){
        res.status(400).json({
            message: 'Send all req field',
            data: {}
        })
    }
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            })
        }
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
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json({
            data: project
        })
    } catch (e) {
        console.log(e)
    }
}

const del = async (req, res) => {
    try {
        const {id} = req.params
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'Project deleted successfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e)
    }
}

const upd = async (req, res) => {
    const {id} = req.params
    const {name, priority, description, deliverydate} = req.body
    try {

        const project = await Project.findOne({
            where: {
                id
            }
        })


        if (project === null) {
            return res.json({
                message: 'Not Found!',
                data: null
            })
        } else {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            })
        }

        return res.json({
            message: 'Project updated successfully',
            data: project
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export {get, create, getOne, del, upd}