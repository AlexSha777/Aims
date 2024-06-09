import Sequelize  from 'sequelize';

import db_connection from './db_working';

const Model = Sequelize.Model;
class Accounts extends Model {}
Accounts.init({
// attributes
    id: {
        type: Sequelize.INTEGER,
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    db_connection,
    modelName: 'users'
});

export default function Accounts (){
    return Accounts;
}