import Sequelize from 'sequelize'
import {sequelize} from '../database/database'
import Task from "./task"

const Project = sequelize.define('Projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    delivery_date: {
        type: Sequelize.DATE
    },
}, {
    timestamps: true
})

Project.hasMany(Task, {foreignKey: 'project_id', sourceKey: 'id'})
Task.belongsTo(Project, {foreignKey: 'project_id', sourceKey: 'id'})

export default Project