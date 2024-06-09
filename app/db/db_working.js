
import { Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './app/db/aims_roller.db'
  });

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const Model = Sequelize.Model;

class Accounts extends Model {}
Accounts.init({
// attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
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
    sequelize,
    modelName: 'accounts'
});


class User extends Model {}
User.init({
// attributes
    account_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Accounts,
       
            // This is the column name of the referenced model
            key: 'id',
          }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    interests: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'user'
});

Accounts.sync();
User.sync();

export default function Add_account(login, email, password) {
    Accounts.create({login: login, email:email, password:password}).then(account=>{
        console.log(account.get({
            plain: true
          }));
    }).catch(err=>{
        console.log(err);
    });
    return true;
}