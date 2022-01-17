const Sequelize = require('sequelize')
const db = new Sequelize('mysampledb','mysampleuser','mysamplepass',{
    host:'localhost',
    dialect:'mysql'
})

db.authenticate()
.then(()=>{
    console.log('Authenticated: Connection successful')
})
.catch((err)=>{
    console.error(err)
})
module.exports = {db}