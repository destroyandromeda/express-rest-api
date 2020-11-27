import Sequelize from "sequelize"
import {sequelize} from "../database/database"

const Task = sequelize.define('Tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    project_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: true
})

export default Task