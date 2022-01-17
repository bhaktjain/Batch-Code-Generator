const {db} = require('./connections')    //dataBase Required
const {DataTypes} = require('sequelize')

const course = db.define('course',{
    id: {
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(30),
        allowNull:false
    
    }
})
const teacher = db.define('teacher',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(30),
        allowNull:false
    }
})
const center = db.define('center',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    city:{
        type:DataTypes.STRING(15),
        allowNull:false
    }
})
const seasons = db.define('seasons',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(10), 
        allowNull:false
    }

})
const batch = db.define('batch',{
    code:{
        type:DataTypes.STRING(8),
        primaryKey:true
    },
    start: DataTypes.DATE,
    end: DataTypes.DATE


}) 
batch.belongsTo(center)
batch.belongsTo(course)
batch.belongsTo(seasons)

seasons.hasMany(batch)
course.hasMany(batch)
center.hasMany(batch)

db.sync()
module.exports={db,center,batch,teacher,course,seasons}