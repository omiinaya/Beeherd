const Sequelize = require("sequelize")
const db = {}

const sequelize = new Sequelize("qww6dau6olmfkfpz", "ph1g0gudqztccot4", "oy4cudzgfz0o1upw", {
    host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}) 

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db