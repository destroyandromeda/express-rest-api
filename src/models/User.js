import {Model} from 'sequelize'

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        }
    }

    const attributes = {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }
    const options = {
        sequelize,
        modelName: 'User',
    }
    User.init(attributes, options)

    return User;
};


import Sequelize from "sequelize"
import {sequelize} from "../database/database"

const User = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
}, {
    timestamps: true
})

export default Task